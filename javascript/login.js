window.onload = index

function index(){
    document.getElementById('Iniciar').addEventListener('click',login)
}

function login(){
    var pass = document.getElementById("pass").value
    var email = document.getElementById("email").value 
    axios({
        method:'post',
        url:'http://localhost:3000/Login/verificar',
        data:{
            pass: pass,
            email:email
        }
    }).then(res=>{
        if(res.data.code == 1){
            // localStorage.setItem("Token",res.data.id)//encriptar el id
            // alert("Bienvenido "+res.data.nombre+"!")
            window.location.href = "../public/signUp.html"
        }
        else{
            console.log("entro")
            alert(res.data.mensaje)

        }
    })
}