import { announcementRepo } from "../../repositories"

const getAllAdvertiseService = async () => {
    const advertise = await announcementRepo.find()
    // SE NECESSARIO USAR O SERIALIZER .validate
    return advertise
}

export default getAllAdvertiseService