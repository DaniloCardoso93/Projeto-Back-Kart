import Comment from "../../entities/comments.entities"
import { AppError } from "../../errors";
import { commentRepo } from "../../repositories"

const deleteCommentsService = async (commentId:string) => {
try {
    commentRepo.delete({id:commentId})

    return {}
    
} catch (error) {
    throw new AppError("Comment not found!", 404);
}
}


export default deleteCommentsService