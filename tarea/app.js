const http = require('http');
//Para usar express requerimos el modulo express
const express = require('express')
//almacenamos todos los métodos, rutas, etc de express lo almacenamos en la constante
const app = express();

//Realizado de forma manual, tradicional
//Request es lo que pide el cliente, Response es la respuesta del servidor
/* const server = http.createServer((request, response)=>{
    //de la manera clásica tendría que mapear cada solicitud
    if(request.url=='/users'){
        response.write('LISTA USUARIOS');
    }if(request.url == '/categorias'){
        response.write('LISTA CATEGORIAS')
    }
    response.end();
}) */

//Usando express
const server = http.createServer(app)

const usersRoutes = require('./routes/users');
//ya no necesito colocar /users en los métodos del archivo users.js
app.use('/users',usersRoutes);

app.get('/',(req, res)=>{
    //send -> envía y cierra la conexión
        //res.send('Bienvenido con Express')
    //sendFile -> envía una página html
    //__dirname.. trae la ruta raíz del archivo actual
    res.sendFile(__dirname+'/index.html')
})

/* //----------------Todo este bloque pasa al archivo user de la carpeta routes----------
    app.get('/users', (req, res)=>{
    //res.send('LISTA USUARIOS EXPRESS')
    //send tratará de imprimir el objeto
    //res.send({name:'Nando'})

    //para mandar un JSON
    res.json({name:'Nando'})

    //para enviar un status
   // res.sendStatus(500)
    //para enviar un status y un mensaje personalizado
    //res.status(500).json('Ocurrió un error')
})

//Realizaremos un CRUD
//[Listar] GET /users -> [{name:'', lastname:''}]
//[Crear] POST /users -> {name:'',lastname:''}
//[Actualizar] PUT /users/:id -> {name:'',lastname:''}
//[Eliminar] DELETE /users/:id

const listUsers = [{id:1, name:"nando", lastname:"acuña"},{id:2,name:"sofia", lastname:"rivera"}]
//Listar
app.get('/users2', (req, res)=>{
    res.json(listUsers)
})

//Buscar
//tenemos 3 tipos de request para capturar info
//req.params -> parámetros en la URL
//req.query -> un query dentro de la URL. Ejem /users2/show?id=1232
//req.body -> cuando viaja por el cuerpo

app.get('/users2/:userId/show',(req,res)=>{
    //const userId = (Number).req.params.userId
    //en ES6 puedo capturar de frente el parámetro, conservando su nombre
    //Recuperamos el valor del parámetro
    const {userId} = req.params
    //Realizamos busqueda
    // const userFinded = listUsers.find((user)=>{
    //     if(user.id === Number(userId)){
    //         return true
    //     }
    // })
    
    //Forma reducida
    const userFinded = listUsers.find(user => user.id === Number(userId))
    //Envía el mensaje con la data 
    res.json(userFinded)
}) */

server.listen(3000, ()=>{
    console.log('SERVER ON')
});

//Para crear el archivo package.json se debe inicializar el npm. En consola ejecutar "npm init --yes"
//Luego agregamos la dependencia Express con el comando "npm install Express"
//Para levantar el aplicativo en otra compu, primero instalamos los módulos de express con
//el comando "npm install" -> instalará todas las dependencias incluidas en el package.json