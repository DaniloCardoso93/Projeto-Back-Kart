import { announcementRepo } from "../../repositories"

const patchAdvertiseService = async (data:any, advertiseId:string):Promise<any> => {
    const findAdvertise = await announcementRepo.findOneBy({id: advertiseId})

    const updateAdvertise = announcementRepo.create({
        ...findAdvertise,
        ...data,
    })

    await announcementRepo.save(updateAdvertise)
// SE NECESSARIO USAR O SERIALIZER .validate
    return updateAdvertise
}

export default patchAdvertiseService