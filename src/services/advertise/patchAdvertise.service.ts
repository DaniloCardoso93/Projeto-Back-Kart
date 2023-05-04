import Announcement from "../../entities/announcement.entities"
import { AppError } from "../../errors"
import { iUpdateAdvertiseData } from "../../interfaces/advertise.interfaces"
import { announcementRepo, imageRepo } from "../../repositories"

const patchAdvertiseService = async (data:iUpdateAdvertiseData, advertiseId:string):Promise<Announcement> => {

    try {
        const findAdvertise = await announcementRepo
        .createQueryBuilder("announcement")
        .leftJoinAndSelect("announcement.images", "images")
        .where("announcement.id = :id", {id:advertiseId})
        .getOneOrFail()
    
        if(!findAdvertise){
            throw new AppError("Advertise not found!", 404)
        }
    
        const updateAdvertise = announcementRepo.create({
            ...findAdvertise,
            ...data,
        })
    
        await announcementRepo.save(updateAdvertise)
        
        return updateAdvertise
        
    } catch (error) {
        throw new AppError("Advertise not found!", 404)
    }
}

export default patchAdvertiseService