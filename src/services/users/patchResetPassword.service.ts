import { AppError } from "../../errors"
import { userRepo } from "../../repositories"

const patchResetPasswordService = async (password:string, resetToken:string)  => {

    const findUser = await userRepo.findOneBy({resetToken:resetToken})

    if (!findUser) throw new AppError("User not found", 404)

    const updateUser = userRepo.create({
        ...findUser,
        password:password,
        resetToken:null
    })

    await userRepo.save(updateUser)

}

export default patchResetPasswordService