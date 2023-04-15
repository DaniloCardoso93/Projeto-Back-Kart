
import User from "../../entities/user.entities"
import { iRegisterUser } from "../../interfaces/user.interface"
import { userRepo } from "../../repositories"
import { returnRegisterShapeUser } from "../../schemas/user.schema"


const postUserService = async (data:iRegisterUser):Promise<any> => {
    const user:User = userRepo.create(data)

    await userRepo.save(user)

    const userRes = await returnRegisterShapeUser.validate(user, {
        stripUnknown:true
    })

    return userRes

}

export default postUserService