import { Cart } from "./cart"
import { Product } from "./product"

export interface User {
    id: number
    name: string
    email: string
    password?: string
    role?: string
    product?: Product[]
    cart?: Cart
}