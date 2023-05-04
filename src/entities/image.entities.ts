import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    ManyToOne,
 } from "typeorm"
import Announcement from "./announcement.entities"


 @Entity("images")
 class Image{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    img:string

    @ManyToOne(() => Announcement, (announcement)=> announcement.images, {onDelete:"CASCADE"})
    announcement:Announcement
 }

 export default Image
