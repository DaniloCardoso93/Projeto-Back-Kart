import { AppError } from "../../errors"
import { userRepo } from "../../repositories"

const retrieveUserService = async (userId:string):Promise<any> => {
    try {
        const user = await userRepo
        .createQueryBuilder('users')
        .leftJoinAndSelect('users.address', 'address')
        .leftJoinAndSelect("users.announcements", "announcement")
        // .leftJoinAndSelect("users.comments", "comment")  CASO QUEIRA OS COMENTARIOS E SÓ TIRAR O COMMENT DESSA LINHA
        .where('users.id = :id', { id: userId })
        .getOneOrFail();

        return user

    } catch (error) {
        throw new AppError("User not found", 404)
    }
}

export default retrieveUserService