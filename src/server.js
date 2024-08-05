import express from 'express'

const app = express() // passando express como uma função 
app.use(express.json())
//get= listar/mostar
// post = criar
// put = editar vários 
// patch = editar um 
// delete = deletar
const usuario = []
app.post('/users', (req,res)=> {
    usuario.push(req.body)

    res.status(201).json(req.body) // pedindo meu body
})

app.get('/users', (req,res)=> {
    res.status(200).json(usuario)
})

app.listen(3000) 

//todos os codigos com 2xx é sucesso 
// 4xx é erro pro cliente, erro do lado do front end
// 5xx é erro no servidor