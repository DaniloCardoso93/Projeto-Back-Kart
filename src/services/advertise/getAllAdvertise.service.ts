import { iListAdvertiseWithPage, iPagination } from "../../interfaces/advertise.interfaces"
import { announcementRepo } from "../../repositories"
import { Request } from "express"
import { returnedArrayAnnouncementShape } from "../../schemas/advertise.schema"

const getAllAdvertiseService = async (req:Request) => {

    const pageSize = 16
    const page = parseInt(req.query.page as string) || 1
    const skip = (page - 1) * pageSize
    
    const [advertise, total] = await announcementRepo.findAndCount({
        take:pageSize,
        skip,
        relations:{
            images:true,
            user:true,
            comments:true
        }
    })

    const totalPages = Math.ceil(total / pageSize)

    const pagination:iPagination = {
        page:page,
        pageSize:pageSize,
        total:total,
        totalPages:totalPages,
        nextPage:page + 1 > totalPages ? null : page + 1,
        previusPage: page - 1 === 0 ? null : page - 1
    }

    const validatedAnnouncement = await returnedArrayAnnouncementShape.validate(advertise, {
        stripUnknown:true
    })

    return {pagination:{...pagination}, announcement:{...validatedAnnouncement}}
}

export default getAllAdvertiseService