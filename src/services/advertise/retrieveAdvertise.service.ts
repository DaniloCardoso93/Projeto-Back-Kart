import Announcement from "../../entities/announcement.entities"
import { AppError } from "../../errors"
import { announcementRepo } from "../../repositories"

const retrieveAdvertiseService = async (advertiseId:string):Promise<Announcement> => {
    
    try {
        const advertise = await announcementRepo.findOne({
            where:{
                id:advertiseId            
            },
            relations:{
                user:true,
                images:true
            }
        })
    
        if(!advertise){
            throw new AppError("Advertise not found", 404)
        }
    
        return advertise
        
    } catch (error) {
        throw new AppError("Advertise not found!", 404)
    }
}


export default retrieveAdvertiseService