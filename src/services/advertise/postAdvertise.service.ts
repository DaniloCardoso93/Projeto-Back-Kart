import { announcementRepo } from "../../repositories"

const postAdvertiseService = async (data:any):Promise<any> => {
    const advertise = announcementRepo.create(data)

    await announcementRepo.save(advertise)
// SE NECESSARIO USAR O SERIALIZER .validate
    return advertise
}


export default postAdvertiseService