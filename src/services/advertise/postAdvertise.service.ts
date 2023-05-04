import { iAdvertiseResponse, iCreateAdvertiseResponse } from "../../interfaces/advertise.interfaces"
import { announcementRepo, imageRepo, userRepo } from "../../repositories"
import { returnedCreateAnnouncementShape } from "../../schemas/advertise.schema"

const postAdvertiseService = async (data:iAdvertiseResponse, userId:string):Promise<iCreateAdvertiseResponse> => {

    const user = await userRepo.findOneBy({id:userId})

    const createData = {
        ...data,
        user:user
    }
    
    const advertise = announcementRepo.create(createData)
    
    await announcementRepo.save(advertise)

    const res = returnedCreateAnnouncementShape.validate(advertise,{
        stripUnknown:true
    }) as iCreateAdvertiseResponse

    return res
}


export default postAdvertiseService