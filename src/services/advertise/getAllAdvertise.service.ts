import { iListAdvertiseWithPage } from "../../interfaces/advertise.interfaces"
import { announcementRepo } from "../../repositories"
import { Request } from "express"

const getAllAdvertiseService = async (req:Request):Promise<iListAdvertiseWithPage> => {

    const pageSize = 16
    const page = parseInt(req.query.page as string) || 1
    const skip = (page - 1) * pageSize
    
    const [advertise, total] = await announcementRepo.findAndCount({
        take:pageSize,
        skip,
        relations:{
            images:true
        }
    })

    const totalPages = Math.ceil(total / pageSize)

    const pagination = {
        page:page,
        pageSize:pageSize,
        total:total,
        totalPages:totalPages,
        nextPage:page + 1 > totalPages ? null : page + 1,
        previusPage: page - 1 === 0 ? null : page - 1
    }

    return {pagination:{...pagination}, announcement:{...advertise}}
}

export default getAllAdvertiseService