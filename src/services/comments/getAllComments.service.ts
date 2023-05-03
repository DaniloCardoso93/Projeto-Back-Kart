import { Request } from "express";
import { commentRepo } from "../../repositories";
import { iPagination } from "../../interfaces/advertise.interfaces";
import { responseArrayCommentsShape } from "../../schemas/commets.schema";

const getAllCommentsService = async (req:Request) => {
    const pageSize = 16
    const page = parseInt(req.query.page as string) || 1
    const skip = (page - 1) * pageSize

    const [comments, total] = await commentRepo
    .createQueryBuilder("comment")
    .take(pageSize)
    .skip()
    .leftJoinAndSelect("comment.user", "user")
    .leftJoinAndSelect("comment.announcement", "announcement")
    .getManyAndCount()

    const totalPages = Math.ceil(total / pageSize)

    const pagination:iPagination = {
        page:page,
        pageSize:pageSize,
        total:total,
        totalPages:totalPages,
        nextPage:page + 1 > totalPages ? null : page + 1,
        previusPage: page - 1 === 0 ? null : page - 1
    }

    const res = await responseArrayCommentsShape.validate(comments, {
        stripUnknown:true
    })

    return {pagination:{...pagination}, comments:{...res}}
}


export default getAllCommentsService