//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//Métodos HTTP
//GET: Buscar uma ou mais informações do Back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente do back-end
//DELETE: Remover uma informação do back-end

//Request Param: Parâmetros que vem na rota que identificam um recurso.
//Query Param: Parâmetros que vem na rota, geralmente opcionais.
//Request Body: Parâmetros para criar a atualização de informação.

import express, { request, response } from 'express'
const app = express()

app.use(express.json())

const users = [
    "Luan",
    "Felipe",
    "Ana",
    "Carlos",
    "Gabriela",
    "Marina"
]

app.get("/users", (request, response) => {
    const search = String(request.query.search) //Query Param
    
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users; //Filtragem de usuários

    return response.json(filteredUsers)
})

app.get("/users/:id", (request, response) => { // Request Param
    const id = Number(request.params.id)
    const user = users[id]
    return response.json(user)
})

app.post("/users", (request, response) => {
    const data = request.body // Request Body

    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user)
})

app.listen(3333)

teste4