import { Router } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../DataSource";
import { Role } from "../entity/Role";
import bcrypt from 'bcryptjs'
import { authenticateJWT } from "../middleware/authMiddleware";
import { Product } from "../entity/Product";
import { createWriteStream } from "fs";


const router = Router()

router.post('/', async(req, res) => {
    const { idUser, name, description, price, category, storeName } = req.body 

    if (!idUser || !name || !description || !price || !category || !storeName) { 
        return res.status(400).json({ 
            error: {
                status: 400,
                name: 'Error creating product',
                message: 'You missed a required field'
            }
        });
    }

    const userRepository = AppDataSource.getRepository(User);
    const productRepository = AppDataSource.getRepository(Product);
    

    let user = await userRepository.findOne({ where: { id: parseInt(idUser) } });
    
    if (!user) {
        return res.status(404).json({
            error: {
                status: 404,
                name: 'NotFound',
                message: 'User not found'
            }
        });
    }
    
    const newProduct = productRepository.create({
        name,
        description,
        price: parseFloat(price),
        category,
    });

    await productRepository.save(newProduct);


    res.status(201).json({
        data: newProduct
    });
});

export default router;