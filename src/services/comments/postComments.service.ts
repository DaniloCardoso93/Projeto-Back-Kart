import Announcement from "../../entities/announcement.entities"
import Comment from "../../entities/comments.entities"
import User from "../../entities/user.entities"
import { AppError } from "../../errors"
import { iAdvertise, iUser } from "../../interfaces/advertise.interfaces"
import { iComment } from "../../interfaces/commets.interface"
import { announcementRepo, commentRepo, userRepo } from "../../repositories"
import { responseRegisterCommentsShape } from "../../schemas/commets.schema"

const postCommentsService = async (data:iComment, announcement:iAdvertise, user:iUser):Promise<any> => {
    
    const dataCreate = {
        ...data,
        user:user,
        announcement:announcement
    }

    const comment = commentRepo.create(dataCreate)

    await commentRepo.save(comment)

    const res = responseRegisterCommentsShape.validate(comment, {
        stripUnknown:true
    })

    return res

}


export default postCommentsService