import { iResponseUser } from "../../interfaces/user.interface"
import { userRepo } from "../../repositories"
import { returnUserShape } from "../../schemas"

const getProfileService = async (userId:string):Promise<iResponseUser> =>{
    const user = await userRepo
    .createQueryBuilder("users")
    .leftJoinAndSelect("users.address", "adress")
    .leftJoinAndSelect("users.announcements", "announcement")
    .leftJoinAndSelect("users.comments", "comments")
    .where("users.id = :id", {id: userId})
    .getOneOrFail()

    const userRes = await returnUserShape.validate(user, {
        stripUnknown:true
    }) as iResponseUser

    return userRes
}


export default getProfileService