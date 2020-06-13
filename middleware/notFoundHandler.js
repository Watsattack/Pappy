const notFoundHandler = ((req,res)=>{
    res.status(400);
    res.json({"404": "No existe la pagina"})
})

module.exports = notFoundHandler