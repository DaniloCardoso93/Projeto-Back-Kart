import Announcement from "../../entities/announcement.entities"
import { AppError } from "../../errors"
import { iUpdateAdvertiseData } from "../../interfaces/advertise.interfaces"
import { announcementRepo } from "../../repositories"
import { returnUpdateAdvertise } from "../../schemas/advertise.schema"

const patchAdvertiseService = async (data:iUpdateAdvertiseData, advertiseId:string):Promise<Announcement> => {

    const findAdvertise = await announcementRepo.findOne({
        where:{
            id:advertiseId
        },
        relations:{
            images:true
        }
    })

    if(!findAdvertise){
        throw new AppError("Advertise not found!", 404)
    }

    const updateAdvertise = announcementRepo.create({
        ...findAdvertise,
        ...data,
    })

    await announcementRepo.save(updateAdvertise)
    
    return updateAdvertise
}

export default patchAdvertiseService