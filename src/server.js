import express from 'express'
import { AppDataSource } from './datasource'
import { Usuario } from './usuario'
const app = express() // passando express como uma função 
app.use(express.json())

const userdata = AppDataSource.getRepository(Usuario)
//get= listar/mostar
// post = criar
// put = editar vários 
// patch = editar um 
// delete = deletar
const usuario = []
app.post('/users', async (req,res)=> { //save(req.body)
    usuario.push(req.body)

    res.status(201).json(req.body) // pedindo meu body
})

app.get('/users',async (req,res)=> {
   
    const usuarios = await userdata.find()
    res.status(200).json(usuarios)
})

app.listen(3000) 

//todos os codigos com 2xx é sucesso  // .push.save
// 4xx é erro pro cliente, erro do lado do front end
// 5xx é erro no servidor

// usuario , claudia
// senha , D7e5zWHC64dyQoVE