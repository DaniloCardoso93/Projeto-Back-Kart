import { hashSync } from "bcryptjs"
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany,
    BeforeUpdate,
    BeforeInsert,
 } from "typeorm"
import Announcement from "./announcement.entities"
import Comment from "./comments.entities"

 @Entity("users")
 class User {

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length: 50})
    fullName:string

    @Column({length: 14, unique:true})
    cpf:string

    @Column({length: 20})
    cellphone:string

    @Column({length: 14})
    birthdate:string

    @Column({length: 100})
    password:string

    @Column({length: 14, unique:true})
    email:string

    @Column({length: 250})
    bio:string

    @Column({default:true})
    isAdvertiser:boolean

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @Column({default:true})
    isActive:boolean

    @OneToMany(() => Announcement, (announcements) => announcements.user)
    announcements:Announcement[]

    @OneToMany(() => Comment, (comments)=> comments.user)
    comments:Comment[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }
 }

 export default User