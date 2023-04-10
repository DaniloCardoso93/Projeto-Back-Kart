import Announcement from "../../entities/announcement.entities"
import { announcementRepo } from "../../repositories"

const getAllAdvertiseService = async ():Promise<Announcement[]> => {
    const advertise = await announcementRepo.find()

    return advertise
}

export default getAllAdvertiseService