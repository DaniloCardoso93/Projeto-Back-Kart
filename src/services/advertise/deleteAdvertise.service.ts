import { announcementRepo } from "../../repositories"

const deleteAdvertiseService = async (advertiseId: string): Promise<object> => {
    await announcementRepo.delete({ id: advertiseId })

    return {}
}




export default deleteAdvertiseService