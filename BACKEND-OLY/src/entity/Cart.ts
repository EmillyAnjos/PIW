import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Product } from "./Product"


@Entity()
export class Cart{
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => User, user => user.cart)
    user!: User

    @Column("decimal", { precision: 10, scale: 2 })
    totalPrice!: number;
 
    @ManyToMany(() => Product, product => product.carts)
    @JoinTable() 
    products!: Product[];
  
}