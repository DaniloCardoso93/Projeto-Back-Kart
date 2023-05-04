import { NextFunction, Request, Response } from "express";
import { commentRepo } from "../../repositories";
import { AppError } from "../../errors";

const ensureLoggerUserOwnerCommentMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    const loggedUserId = req.userId.id;

    const foundParamsId = await commentRepo
    .createQueryBuilder("comment")
    .leftJoinAndSelect("comment.user", "user")
    .where("comment.id = :id", {id: req.params.id})
    .getOne()

    if (loggedUserId === foundParamsId.user.id){
        return next()
    }

    throw new AppError("Missing authorization", 401)

}

export default ensureLoggerUserOwnerCommentMiddleware