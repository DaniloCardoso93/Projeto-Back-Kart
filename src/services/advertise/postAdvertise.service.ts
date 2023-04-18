import Announcement from "../../entities/announcement.entities"
import { iAdvertiseResponse } from "../../interfaces/advertise.interfaces"
import { announcementRepo, imageRepo, userRepo } from "../../repositories"

const postAdvertiseService = async (data:iAdvertiseResponse, userId:string):Promise<Announcement | any> => {

    const user = await userRepo.findOneBy({id:userId})

    const res = {
        ...data,
        user:user
    }
    
    const advertise = announcementRepo.create(res)
    
    await announcementRepo.save(advertise)

    return advertise
}


export default postAdvertiseService