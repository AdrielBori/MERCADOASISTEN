/*declaracion variable*/

const dataUser=[]
const shoppingCart=[]
const dataProducts=[]
let userActive=undefined
let userNew=undefined
let navUsuario=undefined
let respuesta

const porcionCode=`
<form id="inicioSession">
    <input type="email" id="emailUsActive" placeholder="Ingrese email de usuario">
    <input type="password" id="passwUsActive" placeholder="Ingrese Contraseña">
    <div>
    <button type="submit">Inicie Session </button>
    <button type="button" onclick="nuevoUser()">crear Usuario </button>
    </div>
</form>`



/*carga de datos de productos*/
fetch('JS/datosProductos.json')
    .then((resp)=>resp.json())
    .then((data)=>{
        let valores=JSON.stringify(data)
        localStorage.setItem("infProducts",valores)
        if(dataProducts.length===0){
            const restaurar=JSON.parse(localStorage.getItem("infProducts"))
            if(restaurar===null){
                alert("ingrese Productos")
            } 
            else{
                restaurar.forEach(element => {
                    const produtsList= document.getElementById('productsOnSale')
                    const tarjeta=document.createElement('div');
                    tarjeta.innerHTML=`<div class="cardM">
                        <div class="nombP">${element.nombre}</div>
                        <div  class="cardCM" >
                            <span class="precioP">precio</span>:${element.precio}
                            <a href="#" name="agregar"  id="${element.nombre}" class="btnAgP">agregar</a>
                        </div>
                        </div>`
                    produtsList.appendChild(tarjeta);
                    dataProducts.push(element)
                });
            } 
        }
    })
/*logica de usuario*/
navUsuario = document.getElementById("formInicioUser")
        navUsuario.innerHTML=porcionCode
/*usuario activo*/
        if(userActive===undefined){
            const restaurar=JSON.parse(localStorage.getItem("userActive"))
            if(restaurar===null){
                alert("inicie session")
            } 
            else{
            userActive=restaurar
            navUsuario = document.getElementById("formInicioUser")
                        navUsuario.innerHTML=`<h4>Bienvenido ${userActive.nombre}</h4>
                            <button type="button" id="xSession" onclick="cerrarSession()">Cerrar Session </button>
                            `                      
            } 
        }
        document.getElementById("inicioSession").addEventListener("submit",function(e){
            let userEmail=document.getElementById("emailUsActive").value
            let passwUser=document.getElementById("passwUsActive").value
                    /*validacion de inicio*/
                    if(userEmail=="" || passwUser==""){
                        alert("ingrese datos validos")
                    }else if(dataUser.length===0){
                        const restaurar=JSON.parse(localStorage.getItem("dataUser"))
                        restaurar.forEach(element=>{
                            dataUser.push(element)
                            if(userEmail==element.email & passwUser==element.password){
                                navUsuario = document.getElementById("formInicioUser")
                                navUsuario.innerHTML=`<h4>Bienvenido ${element.nombre}</h4>
                                    <button type="button" id="xSession" onclick="cerrarSession()">Cerrar Session </button>
                                    `                      
                                let valores=JSON.stringify(element)
                                localStorage.setItem("userActive",valores)
                                userActive=element
                                }
                        })
                    }else{
                        respuesta=false
                        dataUser.forEach(element=>{
                            if(userEmail==element.email & passwUser==element.password){
                                    navUsuario = document.getElementById("formInicioUser")
                                    navUsuario.innerHTML=`<h4>Bienvenido ${element.nombre}</h4>
                                        <button type="button" id="xSession" onclick="cerrarSession()">Cerrar Session </button>

                                        `                      
                                    let valores=JSON.stringify(element)
                                    localStorage.setItem("userActive",valores)
                                    userActive=element
                                    respuesta=true
                                }
                            })
                            respuesta===true ?console.log("ok") : alert("usuario no encontrado")
                }
        })

        /*cierre de session*/
function cerrarSession(e){
    navUsuario = document.getElementById("formInicioUser")
        navUsuario.innerHTML=porcionCode
    localStorage.removeItem('userActive');
    userActive=undefined
    location.reload()
    }
    function saveUser(){
            let nombreNewUser=document.getElementById("nombreNewUser").value
            let passNewUser=document.getElementById("passNewUser").value
            let emailNewUser=document.getElementById("emailNewUser").value
            if (nombreNewUser === ""|| passNewUser=== ""||emailNewUser==="" ){
                    /*   return Swal.fire(
                    'Sin valores?',
                    'ingrese algun producto?',
                    'question'
                  ) */
                alert("error")
            }else{
                    userNew=new UserNew(nombreNewUser,passNewUser,emailNewUser)
                    let restaurar=JSON.parse(localStorage.getItem("dataUser"))
                    if(restaurar===null){
                        dataUser.push(userNew)
                        
                        localStorage.setItem("dataUser",JSON.stringify(dataUser))
                    }else{
                            alert(JSON.stringify(dataUser))
                            restaurar.forEach(element=>{
                            dataUser.push(element)
                        })
                        dataUser.push(userNew)
                        localStorage.removeItem("dataUser")
                        localStorage.setItem("dataUser",JSON.stringify(dataUser))
                    }
                    navUsuario = document.getElementById("formInicioUser")
                        navUsuario.innerHTML=porcionCode
    }
    }
    function nuevoUser(){
        navUsuario = document.getElementById("formInicioUser")
        navUsuario.innerHTML=`
        <form  id="formNewUser">
            <h5>Crea a tu Usuario</h5>
            <input type="text" placeholder="ingresa un nombre" id="nombreNewUser">
            <input type="password" placeholder="ingresa una contraseña" id="passNewUser"> 
            <input type="email" placeholder="ingresa un E-mail"  id="emailNewUser">
            <div>
            <button type="button" onclick="saveUser()">Crear</button>
            <button type="button" id="xSession" onclick="cerrarSession()">volver</button>
            </div>
        </form>
        `
    }



    class UserNew {
        constructor(nombreNewUser,passNewUser,emailNewUser,)
        {
        this.nombre=nombreNewUser
        this.password=passNewUser;
        this.email=emailNewUser;
        this.compras=[]
    }

}
