import { NextFunction, Request, Response } from "express";
import { commentRepo } from "../../repositories";
import { AppError } from "../../errors";

const ensureCommentParamsIdExistsMiddleware = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const comment = await commentRepo
        .createQueryBuilder("comment")
        .where("comment.id = :id", {id: req.params.id})
        .getOneOrFail()
        
        return next()

    } catch (error) {
        throw new AppError("Comment not found!", 404)
    }

}

export default ensureCommentParamsIdExistsMiddleware