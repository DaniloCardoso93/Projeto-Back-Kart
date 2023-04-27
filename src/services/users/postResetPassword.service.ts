import { AppError } from "../../errors"
import { userRepo } from "../../repositories"
import { randomUUID } from "node:crypto"
import { updateResponseUserShape } from "../../schemas/user.schema"
import { resetPasswordTemplete, sendEmail } from "../../util/sendEmail.util"

const postResetPasswordService = async (email:string, protocol:string, host:string) => {
    const user = await userRepo.findOneBy({email:email})
    
    if (!user) throw new AppError("user not found", 404)
    
    const resetToken = randomUUID()

    const userWithoutPass = await updateResponseUserShape.validate(user, {
        stripUnknown:true
    })
    const updateUser = userRepo.create({
        ...userWithoutPass,
        resetToken:resetToken
    })

    await userRepo.save(updateUser)

    const resetPasswordTemplate = resetPasswordTemplete(email, user.fullName, protocol, host, resetToken)

    await sendEmail(resetPasswordTemplate)

}

export default postResetPasswordService