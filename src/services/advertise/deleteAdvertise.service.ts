import { announcementRepo, imageRepo } from "../../repositories"

const deleteAdvertiseService = async (advertiseId: string): Promise<object> => {
    const advertise = await announcementRepo.findOne({where:{id:advertiseId}, relations:{images:true}})

    advertise.images.forEach(async(element)=>{
        imageRepo.delete({id:element.id})
    }) 

    announcementRepo.delete({id:advertiseId})

    return {}
}




export default deleteAdvertiseService