import { NextFunction, Request, Response } from "express";
import { announcementRepo } from "../../repositories";
import { AppError } from "../../errors";

const ensureLoggerUserOwnerAnnouncementMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    const loggedUserId = req.userId.id;

    const foundParamsId = await announcementRepo
    .createQueryBuilder("announcement")
    .leftJoinAndSelect("announcement.user", "user")
    .where("announcement.id = :id", {id: req.params.id})
    .getOne()

    if (loggedUserId === foundParamsId.user.id){
        return next()
    }

    throw new AppError("Missing authorization", 401)

}

export default ensureLoggerUserOwnerAnnouncementMiddleware