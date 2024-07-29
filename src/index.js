const express = require('express') // cod para importar 

const app = express() // chamando a função express
const PORT = 3000 // porta

function createProject(nome, descricao, projeto, autores) {
    return {
        nome: nome,
        descricao: descricao,
        projeto: projeto,
        autores: autores,
    };
}

const project = [
    createProject
    (
        "Projeto Final - OLY",
        "Um site que vende produtos usados, mais especificamente produtos no tema gótico e geek.",
        "Este projeto é uma aplicação web para gerenciamento de vendas de uma loja online de roupas.",
        ["Emilly dos Anjos", "Rodrigo"]
    )
]

//REQ = requisição RES = resposta
app.get('/project', (req,res) => { // verbo http (consultar alguma coisa = GET) (postar alguma coisa ou enviar =POST) (deletar = delete) (alterar alguma coisa= PUT OU PATCH)
    const nome = req.params.nome;
    const descricao = req.params.descricao;
    const projeto = req.params.projeto;
    const autores = req.params.autores;

}) // barra significa passar nenhum parametro

app.listen(PORT, () => { //função para fazer o express ouvir o codigo "listen" // ()<= uma abreviação de função
    console.log(`help me ${PORT}`)//checando se a porta abriu
})


// Middleware para responder a qualquer requisição com HTML
app.use((req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Projeto Final - OLY </title>
        </head>
        <body>
            <h1>Um site que vende produtos usados, mais especificamente produtos no tema gótico e geek.</h1>
            <p>Este projeto é uma aplicação web para gerenciamento de vendas de uma loja online de roupas.</p>
            <h2>Autores</h2>
            <ul>
                <li>Emilly Anjos - 537384 </li>
                <li>Rodrigo - matricula </li>
            </ul>
        </body>
        </html>
    `);
});