import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, CreateDateColumn, 
    UpdateDateColumn,
    ManyToOne,
    OneToMany
 } from "typeorm"
import User from "./user.entities"
import Image from "./image.entities"
import Comment from "./comments.entities"


 @Entity("announcement")
 class Announcement{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length:50})
    brand:string

    @Column({length:50})
    model:string

    @Column({length:10})
    year:string

    @Column({length:100})
    fuel:string

    @Column({length:50})
    odometer:string

    @Column({length:50})
    color:string

    @Column({length:50})
    fipe:string

    @Column({length:50})
    price:string

    @Column({length:250})
    description:string

    @Column()
    isPublished:boolean

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @ManyToOne(() => User, (user)=> user.announcements)
    user:User

    @OneToMany(() => Image, (images)=> images.announcement)
    images:Image[]

    @OneToMany(() => Comment, (comments)=> comments.announcement)
    comments:Comment[]

 }

 export default Announcement