import AppDataSource from "../data-source";
import Address from "../entities/address.entities";
import Announcement from "../entities/announcement.entities";
import Comment from "../entities/comments.entities";
import Image from "../entities/image.entities";
import User from "../entities/user.entities";


const addressRepo = AppDataSource.getRepository(Address)
const announcementRepo = AppDataSource.getRepository(Announcement)
const commentRepo = AppDataSource.getRepository(Comment)
const imageRepo = AppDataSource.getRepository(Image)
const userRepo = AppDataSource.getRepository(User)


export {
    addressRepo,
    announcementRepo,
    commentRepo,
    imageRepo,
    userRepo,
}

