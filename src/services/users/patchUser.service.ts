import { AppError } from "../../errors"
import { userRepo } from "../../repositories"
import { returnUserShape, updateResponseUserShape } from "../../schemas/user.schema"

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

    const findUser = await userRepo.findOneByOrFail({id:userId})
    
    const user = await updateResponseUserShape.validate(findUser,{
        stripUnknown:true        
    })
    console.log(findUser)
       
    const updateUser = userRepo.create({
        ...user,
        ...data
        })

    await userRepo.save(updateUser)

    const userWithoutPsw = await updateResponseUserShape.validate(updateUser, {
        stripUnknown:true
    })

    return userWithoutPsw


} catch (error) {
    console.log(error)

}
}

export default patchUserService