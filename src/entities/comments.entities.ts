import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn
 } from "typeorm"
import Announcement from "./announcement.entities"
import User from "./user.entities"


 @Entity("comments")
 class Comment{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length:500})
    description:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @ManyToOne(() => Announcement, (announcement)=> announcement.comments, {onDelete:"CASCADE"})
    announcement:Announcement

    @ManyToOne(()=> User, (user)=> user.comments, {onDelete:"CASCADE"})
    user:User
 }


 export default Comment