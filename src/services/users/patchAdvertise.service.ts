import { AppError } from "../../errors"
import { userRepo } from "../../repositories"
import { returnShapeUser } from "../../schemas/user.schema"

const patchUserService = async(data:any, userId:string):Promise<any> => {

    // if(data.email){
    //     const emailExist = await userRepo.findOneBy({email:data.email})
    //     if(emailExist){
    //         throw new AppError("Email already exists", 409)
    //     }
    // }

    // if(data.cpf){
    //     const cpfExist = await userRepo.findOneBy({cpf:data.cpf})
    //     if(cpfExist){
    //         throw new AppError("CPF already exists", 409)
    //     }
    // }

try {
    const findUser = await userRepo.findOneBy({id:userId})

    if(!findUser) throw new AppError("User not found!", 404)
    
    const updateUser = userRepo.create({
        ...findUser,
        ...data
    })

    
    await userRepo.save(updateUser)
    
    // const userWithoutPsw = await returnShapeUser.validate(updateUser, {
    //     stripUnknown:true
    // })

    return updateUser

} catch (error) {
    throw new AppError("User not found!", 404)
}
}

export default patchUserService