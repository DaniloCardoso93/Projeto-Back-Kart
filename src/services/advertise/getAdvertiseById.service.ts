import { AppError } from "../../errors"
import { announcementRepo } from "../../repositories"

const getAdvertiseByIdService = async (advertiseId:string):Promise<any> => {
    const advertise = await announcementRepo.findOneBy({id:advertiseId})

    if(!advertise){
        throw new AppError("Advertise not found", 404)
    }
// SE NECESSARIO USAR O SERIALIZER .validate
    return advertise
}


export default getAdvertiseByIdService