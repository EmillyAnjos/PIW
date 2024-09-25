import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Cart } from "./Cart"



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

    @ManyToMany(() => Cart, cart => cart.products)
    carts!: Cart[]
}