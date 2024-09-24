import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"



@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!: string

    @Column()
    description!: string

    @Column("decimal", { precision: 10, scale: 2 })
    price!: number

    @Column()
    category!: string

    @ManyToOne(() => User, user => user.products)
    users!: User[]
}