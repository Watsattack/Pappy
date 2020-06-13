//aqui hacmos las consultas
const db = require('../Database/BD')
const express = require('express')
const login = express.Router()
const jwt = require('jsonwebtoken')
login.post("/verificar",(req,res)=>{
    const email = req.body.email
    const pass = req.body.pass
    const query = `SELECT * FROM usuario WHERE contra ='${pass}' AND usuario = '${email}'`
    db.query(query).then(rows=>{
        if(rows.length!==0){
            res.status(200)
            res.json({code:1})//enviara 1 si se completo exitosamente la operacion
            //enviar encriptado el id del usuario para guardarlo en localstorage
        }
        else{
            res.status(200)
            res.json({code:2,mensaje:'Correo o contraseña incorrectos!'})//enviara 2 en caso de que no se encuentre el correo o contraseña
        }
    }).catch(err=>{
        console.log(err)
        res.status(500)
        res.setEncoding("Server error...")
    })



})


module.exports = login