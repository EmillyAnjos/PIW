import { Product } from "./product"
import { User } from "./user"

export interface Cart {
    id: number
    user: User
    totalPrice: number
    product: Product

}