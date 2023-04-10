import Announcement from "../../entities/announcement.entities"
import { AppError } from "../../errors"
import { announcementRepo } from "../../repositories"

const getAdvertiseByIdService = async (advertiseId:string):Promise<Announcement> => {
    const advertise = await announcementRepo.findOne({
        where:{
            id:advertiseId            
        },
        relations:{
            images:true
        }
    })

    if(!advertise){
        throw new AppError("Advertise not found", 404)
    }

    return advertise
}


export default getAdvertiseByIdService