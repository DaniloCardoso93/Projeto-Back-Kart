import { AppError } from "../../errors"
import { announcementRepo, imageRepo } from "../../repositories"

const deleteAdvertiseService = async (advertiseId: string): Promise<object> => {
     
    try {
        const advertise = await announcementRepo.findOne({where:{id:advertiseId}, relations:{images:true}})
        
        if(!advertise){
            throw new AppError("Announcement not found!", 404)
        }
    
        advertise.images.forEach(async(element)=>{
            imageRepo.delete({id:element.id})
        }) 
    
        announcementRepo.delete({id:advertiseId})
    
        return {}
        
    } catch (error) {
        throw new AppError("Announcement not found!", 404)
    }
}




export default deleteAdvertiseService