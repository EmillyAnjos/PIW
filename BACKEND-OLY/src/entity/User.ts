
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { Product } from "./Product"
import { Cart } from "./Cart"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @ManyToOne(() => Role, role => role.users)
    role!: Role

    @OneToMany(() => Product, product => product.users)
    products!: Product[];

    @OneToOne(() => Cart, carts => carts.user)
    cart!: Cart[];


}