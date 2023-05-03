import { iCommentResponse } from "../../interfaces/commets.interface"
import { commentRepo } from "../../repositories"
import { responseRegisterCommentsShape } from "../../schemas/commets.schema"

const retrieveCommentsService = async (commentId:string):Promise<iCommentResponse> => {
    const comment = await commentRepo
    .createQueryBuilder("comment")
    .leftJoinAndSelect("comment.user", "user")
    .leftJoinAndSelect("comment.announcement", "announcement")
    .where("comment.id = :id", {id: commentId})
    .getOneOrFail()

    const res = await responseRegisterCommentsShape.validate(comment, {
        stripUnknown:true
    }) as iCommentResponse

    return res
}

export default retrieveCommentsService