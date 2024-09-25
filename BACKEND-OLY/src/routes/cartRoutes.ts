import { Router } from "express";
import { AppDataSource } from "../DataSource";
import { Product } from "../entity/Product";
import { Cart } from "../entity/Cart";
import { Double, In } from "typeorm";
import { User } from "../entity/User";

const router = Router();

router.post('/', async (req, res) => {
    const {userId, productId} = req.body
 
    if (!userId) { 
        return res.status(400).json({ 
            error: {
                status: 400,
                name: 'Error creating cart',
                message: 'You missed a required field or provided invalid data'
            }
        });
    }

    const productRepository = AppDataSource.getRepository(Product)
    const cartRepository = AppDataSource.getRepository(Cart)
    const userRepository = AppDataSource.getRepository(User)

    let product
    try{
        product = await productRepository.findOneBy({id: productId})
    } catch (e){
        return res.status(404).json({ 
            error: {
                status: 404,
                name: 'Error creating cart',
                message: 'Product not found'
            }
        });
    }

    let cartInDB = await cartRepository.findOne({where:{id:userId}})
    const products = [product].filter(p => p !== null);
    let userInDB
    
    try {
        userInDB = await userRepository.findOne({where: {id: userId}})
    } catch (e) {
        return res.status(404).json({ 
            error: {
                status: 404,
                name: 'Error creating cart',
                message: 'User not found'
            }
        });
    }

    if(!cartInDB){
        cartInDB = cartRepository.create({
            user: userInDB,
            totalPrice: product?.price,
            products: products
      
        })
    }


    let totalPrice: number = 0

    
    if (products.length === 0) {
        return res.status(404).json({
            error: {
                status: 404,
                name: 'NotFound',
                message: 'No products found with the provided IDs'
            }
        })
    }
    
    products.forEach(product => {
        totalPrice += product.price 
    });
    
});

router.get('/:id', async(req,res) => {
    const cartId = req.params.id
    const cartRepository = AppDataSource.getRepository(Cart)
    const cart = await cartRepository.findOne({
        where: {
            id: parseInt(cartId)
        },relations: ['products']
})
    if(!cart){
        return res.status(404).json({
            error:{
                status: 404,
                name: 'not found',
                message: 'cart not found'
            }
        })
    }

    cartRepository.save(cart)
    res.status(200).json({
        data:cart
    })
})

router.delete('/:id', async(req,res) => {
    const cartId = req.params.id
    const cartRepository = AppDataSource.getRepository(Cart)
    const cart = await cartRepository.findOne({
        where: {
            id: parseInt(cartId)
        },relations: ['products']
})
    if(!cart){
        return res.status(404).json({
            error:{
                status: 404,
                name: 'not found',
                message: 'cart not found'
            }
        })
    }

    cartRepository.remove(cart)
    res.status(200).json({
        data:cart
    })

})

router.put('/:id', async(req,res) => {
    const cartId = req.params.id
    const { id,totalPrice, productIds, products } = req.body

    const productRepository = AppDataSource.getRepository(Product)
    const cartRepository = AppDataSource.getRepository(Cart)
    
    const cart = await cartRepository.findOne({
        where: {
            id: parseInt(cartId)
        },relations: ['products']
})
    if(!cart){
        return res.status(404).json({
            error:{
                status: 404,
                name: 'not found',
                message: 'cart not found'
            }
        })
    }

    if(!productIds ||  !Array.isArray(productIds)) {
        return res.status(400).json({
            error:{
                status:400,
                name:'Bad Request',
                message: 'Invalid product IDs'
            }
        })
    }

const productsInDB = await productRepository.findBy({
    id: In(productIds)
});

if (! productsInDB || productsInDB.length !== productIds.length) {
    return res.status(400).json({
        error: {
            status: 400,
            name: 'Products Not Found',
            message: 'One or more products were not found in the database'
        }
    });
}

        cart.id = id || cart.id
        cart.totalPrice = totalPrice || cart.totalPrice
        cart.products = productsInDB;

        await cartRepository.save(cart)

        res.status(200).json({
            data:cart
        })

})


export default router;
