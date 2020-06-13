const express = require('express')
const url = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Login = require('./routes/Login')
const notFoundHandler = require('./middleware/notFoundHandler')//en caso de que el usuario intenete acceder a una url no permitida o no declarada
const corsHandler = require('./middleware/corsHandler')//son las acciones que se le permite al  usuario hacer en la aplicacion, POST,GET,DELETE.
const autentificar = require('./middleware/Autentificar')//encripta los encabezados y los datos guardadopss en local y sesionstorage
url.use(corsHandler)
url.use(morgan('dev'))
url.use(bodyParser.json());
url.use(bodyParser.urlencoded({ extended: true }));
url.use("/Login",Login)
url.use(autentificar)
//url.use("/Home", home)
url.use(notFoundHandler)
url.listen(3000,()=>{
    console.log("Corriendo.....")
})