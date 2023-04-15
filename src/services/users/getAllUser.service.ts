import { Request } from "express";
import { userRepo } from "../../repositories";

const getAllUserService = async (req:Request):Promise<any> => {
    const pageSize = 16
    const page = parseInt(req.query.page as string) || 1

    const [result, total] = await userRepo
    .createQueryBuilder("user")
    .skip((page - 1) * pageSize)
    .take(pageSize)
    .getManyAndCount()

    const totalPages = Math.ceil(total / pageSize)

    const pagination = {
        page:page,
        pageSize:pageSize,
        total:total,
        totalPages:totalPages,
        nextPage:page + 1 > totalPages ? null : page + 1,
        previusPage: page - 1 === 0 ? null : page - 1
    }

    return {pagination:{...pagination}, users:{...result}}
}

export default getAllUserService