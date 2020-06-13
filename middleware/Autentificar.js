const jwt = require('jsonwebtoken')
const autentificar = (req,res, next)=>{
    try{
        const encriptado = req.headers.authorization.split(" ")[1]
        const decodificar = jwt.verify(encriptado,"pappyToken")
        
        req.login = decodificar
        req.principal = decodificar
        next()
    }catch(error){
        res.status(400)
        console.log("No tienes permisos")
        res.json({code:0, message:"No tienes permisos"})
    }
}
module.exports = autentificar