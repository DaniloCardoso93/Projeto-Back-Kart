import { AppError } from "../../errors"
import { announcementRepo, imageRepo } from "../../repositories"

const deleteAdvertiseService = async (advertiseId: string): Promise<void> => {
     
    try {
        const advertise = await announcementRepo.findOne({
            where:{
                id:advertiseId
            }})
        
        if(!advertise){
            throw new AppError("Announcement not found!", 404)
        }
    
    
        announcementRepo.delete({id:advertiseId})
        
    } catch (error) {
        throw new AppError("Announcement not found!", 404)
    }
}




export default deleteAdvertiseService