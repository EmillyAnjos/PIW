import { Router } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../DataSource";
import { Role } from "../entity/Role";
import bcrypt from 'bcryptjs'
import { authenticateJWT } from "../middleware/authMiddleware";
import { Product } from "../entity/Product";
import { createWriteStream } from "fs";
import { Cart } from "../entity/Cart";


const router = Router()

router.post('/', async(req, res) => {
    const { idUser, name, description, price, category } = req.body 

    if (!idUser || !name || !description || !price || !category ) { 
        return res.status(400).json({ 
            error: {
                status: 400,
                name: 'Error creating product',
                message: 'You missed a required field'
            }
        })
    }

    const userRepository = AppDataSource.getRepository(User);
    const productRepository = AppDataSource.getRepository(Product);
    const cartRepository = AppDataSource.getRepository(Cart)
    
    let cartInDB = await cartRepository

    let user = await userRepository.findOne({ where: { id: parseInt(idUser) } });
    
    if (!user && cartInDB) {
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
    })

    await productRepository.save(newProduct);


    res.status(201).json({
        data: newProduct
    })
    console.log(productRepository)
})


//router.get('/', async (req, res) => {
 //   const productRepository = AppDataSource.getRepository(Product)
//    const products = await productRepository.find(); 
//    res.json({
//        data: products
//    });
//});

router.get('/:id', async (req, res) => {
    const idProduct = req.params.id
    const productRepository = AppDataSource.getRepository(Product)
    const product = await productRepository.findOne({
        where: {
        id:parseInt(idProduct)
    },relations: ['users']
})
    if(!product){
        return res.status(404).json({
            error:{
                status: 404,
                name: 'not found',
                message: 'product not found'
                
            }
        })
    }
    productRepository.save(product)
    res.status(200).json({
        data:  product
    })
});

//router.get('/', async (req, res) => {
 //   try {
 //       const productRepository = AppDataSource.getRepository(Product);
//        const products = await productRepository.find({
//            relations: ['user'] // Adicionando a relação com User, caso exista
 //       });
   //     res.json({
//            data: products
 //       });
//    } catch (error) {
  //      console.error(error);
  //      res.status(500).json({
  //          error: 'Failed to fetch products'
  //      });
  //  }
//});


router.delete('/:id', async (req,res)=>{
    const idProduct = req.params.id
    const productRepository = AppDataSource.getRepository(Product)
    const product = await productRepository.findOne({
        where: {
        id:parseInt(idProduct)
    },relations: ['users']
})
    if(!product){
        return res.status(404).json({
            error:{
                status: 404,
                name: 'not found',
                message: 'product not found'
                
            }
        })
    }

    productRepository.remove(product)
    res.status(200).json({
        data: product
    })

})

router.put('/:id', async(req,res)=>{
    const idProduct = req.params.id
    const { idUser, name, description, price, category } = req.body 

    const userRepository = AppDataSource.getRepository(User);
    const productRepository = AppDataSource.getRepository(Product);
    
    const product = await productRepository.findOne({
        where: {
        id:parseInt(idProduct)
    },relations: ['users']
})
    if(!product){
        return res.status(404).json({
            error:{
                status: 404,
                name: 'not found',
                message: 'product not found'
                
            }
        })
    }
    let productInDB = await userRepository.findOne({ where:{id:idUser}})

    if(!productInDB){
        productInDB = userRepository.create({id:idUser})
        await userRepository.save(productInDB)
    }

      product.name = name || product.name
      product.description= description|| product.description
      product.price = price|| product.price
      product.category = category || product.category
    
    productRepository.save(product)
    res.status(200).json({
        data: product
    })

} )





export default router;