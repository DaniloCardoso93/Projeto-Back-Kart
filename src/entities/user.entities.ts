import { hashSync } from "bcryptjs"
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany,
    BeforeUpdate,
    BeforeInsert,
    OneToOne,
    JoinColumn,
 } from "typeorm"
import Announcement from "./announcement.entities"
import Comment from "./comments.entities"
import Address from "./address.entities"

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

    @Column({length: 150})
    password:string

    @Column({length: 250, unique:true})
    email:string

    @Column({length: 250})
    bio:string

    @Column({default:true})
    isAdvertiser:boolean

    @Column({nullable:true})
    resetToken: string

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

    @OneToOne(() => Address, (address) => address.user, {cascade:true})
    address: Address;

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        if(this.password) this.password = hashSync(this.password, 10)
    }
 }

 export default User