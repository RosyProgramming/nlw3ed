import express, { query } from 'express';

const app = express();


// Rota = conjunto 
// Recursos  = usuário
// Metods HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar informações (Lista, item);
// POST = Criando uma informação
// PUT = Editando uma informação 
// DELETE = deleta uma informação 


// Query Params: http://localhost:3333/users?search=diegospage=2
// Route Params: http://localhost:3333/users (identificar um recurso)
// Body Params: http://localhost:3333/users/1 (identificar um recurso)


app.get('/users', (request, response) => {
    console.log(request, query);
    
    return response.json({ message:'Hello word' });

});

app.listen(3333);

