import { AppError } from "../../errors"
import { userRepo } from "../../repositories"
import { returnUserShape, updateResponseUserShape } from "../../schemas/user.schema"

const patchUserService = async(data:any, userId:string):Promise<any> => {
try {

    const findUser = await userRepo.findOneBy({id: userId})

    if(!findUser) throw new AppError("User not found!", 404)
    
    const user = await updateResponseUserShape.validate(findUser,{
        stripUnknown:true        
    })
       
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
    throw new AppError("User not found!", 404)
}
}

export default patchUserService