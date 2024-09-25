import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Role } from "./entity/Role"
import { Product } from "./entity/Product"
import { Cart } from "./entity/Cart"

export const AppDataSource = new DataSource ({
    type: "sqlite",
    database: "mydatabase.sqlite", 
    synchronize: true,
    entities: [User,Role,Product, Cart]
})