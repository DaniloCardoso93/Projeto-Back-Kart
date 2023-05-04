import User from "../../entities/user.entities"
import { AppError } from "../../errors"
import { userRepo } from "../../repositories"

const deleteUserService = async (userId:string):Promise<any> => {
    try {
        const user = await userRepo
        .createQueryBuilder()
        .delete()
        .from(User)
        .where('id = :id', { id: userId })
        .execute()

        if(!user.affected) throw new Error

        return {}

    } catch (error) {
        throw new AppError("User not found!", 404)
    }
}

export default deleteUserService