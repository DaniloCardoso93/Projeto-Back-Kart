import { iComment } from "../../interfaces/commets.interface"
import { commentRepo } from "../../repositories"
import { responseRegisterCommentsShape } from "../../schemas/commets.schema"


const patchCommentsService = async (data:iComment, commentId:string) => {
    const findComment = await commentRepo
    .createQueryBuilder("comment")
    .leftJoinAndSelect("comment.user", "user")
    .leftJoinAndSelect("comment.announcement", "announcement")
    .where("comment.id = :id", {id: commentId})
    .getOneOrFail()

    const updateComment = commentRepo.create({
        ...findComment,
        ...data,
    })

    await commentRepo.save(updateComment)

    const res = responseRegisterCommentsShape.validate(updateComment, {
        stripUnknown:true
    })

    return res
}


export default patchCommentsService