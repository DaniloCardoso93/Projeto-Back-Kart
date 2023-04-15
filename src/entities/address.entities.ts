import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    OneToOne,
    JoinColumn
 } from "typeorm"
import User from "./user.entities"


 @Entity("address")
 class Address {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length:10})
    zipCode:string

    @Column({length:250})
    street:string

    @Column({length:250})
    city:string
    
    @Column({length:250})
    state:string
    
    @Column({length:50})
    number:string
    
    @Column({length:250, nullable:true})
    complement:string
    
    @OneToOne(() => User, (user) => user.address, {onDelete:"CASCADE"})
    @JoinColumn()
    user: User
 }


 export default Address