import Announcement from "../../entities/announcement.entities"
import { AppError } from "../../errors"
import { iUpdateAdvertiseData } from "../../interfaces/advertise.interfaces"
import { announcementRepo, imageRepo } from "../../repositories"

const patchAdvertiseService = async (data:iUpdateAdvertiseData, advertiseId:string):Promise<Announcement> => {

    try {

        const findAdvertise = await announcementRepo.findOne({
            where:{
                id:advertiseId
            },
            relations:{
                images:true,
            }
        })
    
        if(!findAdvertise){
            throw new AppError("Advertise not found!", 404)
        }
        if(data.images){
            data.images.forEach(async(element)=>{
                const images = imageRepo.create(element)
                await imageRepo.save({
                    ...images,
                    announcement:findAdvertise
                })
            })
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