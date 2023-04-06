import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    ManyToOne
 } from "typeorm"
import Announcement from "./announcement.entities"
import User from "./user.entities"


 @Entity("comments")
 class Comment{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length:500})
    description:string

    @ManyToOne( () => Announcement, (announcement)=> announcement.comments)
    announcement:Announcement

    @ManyToOne( ()=> User, (user)=>user.comments)
    user:User
 }


 export default Comment