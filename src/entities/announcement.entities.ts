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

    @Column()
    year:number

    @Column({length:100})
    fuel:string

    @Column()
    odometer:number

    @Column({length:50})
    color:string

    @Column({length:50})
    fipe:string

    @Column()
    price:number

    @Column({length:250})
    description:string

    @Column({default:true})
    isPublished:boolean

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @OneToMany(() => Image, (images)=> images.announcement, {cascade:true})
    images:Image[]

    @ManyToOne(() => User, (user)=> user.announcements, {onDelete:"CASCADE"})
    user:User

    @OneToMany(() => Comment, (comments)=> comments.announcement)
    comments:Comment[]

 }

 export default Announcement