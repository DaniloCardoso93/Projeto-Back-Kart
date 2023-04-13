import Announcement from "../../entities/announcement.entities"
import { iAdvertiseResponse } from "../../interfaces/advertise.interfaces"
import { announcementRepo, imageRepo } from "../../repositories"

const postAdvertiseService = async (data:iAdvertiseResponse):Promise<Announcement> => {
    
    const advertise = announcementRepo.create(data)
    
    await announcementRepo.save(advertise)

    data.images.forEach(async(element)=>{
        const images = imageRepo.create(element)
        await imageRepo.save({
            ...images,
            announcement:advertise
        })
    })

    return advertise
}


export default postAdvertiseService