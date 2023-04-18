import Announcement from "../../entities/announcement.entities"
import { AppError } from "../../errors"
import { announcementRepo } from "../../repositories"

const retrieveAdvertiseService = async (advertiseId:string):Promise<Announcement> => {
    
    try {
        const advertise = await announcementRepo.findOneOrFail({
            where:{
                id:advertiseId            
            },
            relations:{
                user:true,
                images:true,
                comments:true
            }
        })
    
        return advertise
        
    } catch (error) {
        throw new AppError("Advertise not found!", 404)
    }
}


export default retrieveAdvertiseService