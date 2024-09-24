
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { Product } from "./Product"

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


}