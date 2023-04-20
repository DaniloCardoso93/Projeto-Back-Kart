import { NextFunction, Request, Response } from "express";
import { announcementRepo } from "../../repositories";
import { AppError } from "../../errors";

const ensureAnnouncementParamsIdExistsMiddleware = async (req:Request, res: Response, next: NextFunction) => {
    try {
        await announcementRepo
        .createQueryBuilder("announcement")
        .where("announcement.id = :id", {id:req.params.id})
        .getOneOrFail()
        
        return next()

    } catch (error) {
        throw new AppError("Announcement not found!", 404)
    }

}

export default ensureAnnouncementParamsIdExistsMiddleware