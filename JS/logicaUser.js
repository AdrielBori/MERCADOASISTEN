let x=JSON.parse(localStorage.getItem("userActive"))
    restaurar= x == null ? undefined : userActive=x;

/*inicio de session*/
if(userActive!==0){
    const restaurar=JSON.parse(localStorage.getItem("userActive"))
    userActive=restaurar
    let navUsuario = document.getElementById("formInicioUser")
                        navUsuario.innerHTML=`<h4>Bienvenido ${userActive.nombre}</h4>
                            <button type="button" id="xSession" onclick="cerrarSession()">Cerrar Session </button>
                            `                      
}else if(userActive==0){
    let navUsuario = document.getElementById("formInicioUser")
        navUsuario.innerHTML=`
        <form id="inicioSession">
            <input type="email" id="emailUsActive" placeholder="Ingrese email de usuario">
            <input type="password" id="passwUsActive" placeholder="Ingrese Contraseña">
            <button type="submit">Inicie Session </button>
            <button type="button" onclick="nuevoUser()">crear Usuario </button>
        </form>`
}

document.getElementById("inicioSession").addEventListener("submit",function(e){
    let userEmail=document.getElementById("emailUsActive").value
    let passwUser=document.getElementById("passwUsActive").value
            /*validacion de inicio*/
            if(userEmail=="" || passwUser==""){
                alert("ingrese datos validos")
            }else{
                dataUser.forEach(element => {
                    if(userEmail==element.email & passwUser==element.password){
                        let navUsuario = document.getElementById("formInicioUser")
                        navUsuario.innerHTML=`<h4>Bienvenido ${element.nombre}</h4>
                            <button type="button" id="xSession" onclick="cerrarSession()">Cerrar Session </button>
                            `                      
                        let valores=JSON.stringify(element)
                        localStorage.setItem("userActive",valores)
                        userActive=element
                    }
                })  
            }
            
})
/*cierre de session*/
function cerrarSession(e){
    navUsuario = document.getElementById("formInicioUser")
        navUsuario.innerHTML=`
        <form id="inicioSession">
            <input type="email" id="emailUsActive" placeholder="Ingrese email de usuario">
            <input type="password" id="passwUsActive" placeholder="Ingrese Contraseña">
            <button type="submit">Inicie Session </button>
            <button type="button" onclick="nuevoUser()">crear Usuario </button>
        </form>`
    localStorage.removeItem('userActive');
    userActive=0
    location.reload()
    }


/*creacion usuario*/

class UserNew {
    constructor(nombre,contra,email)
    {
    this.nombre=nombre
    this.password=contra;
    this.email=email;
}
}
document.getElementById("formNewUser").addEventListener("submit",function(e){
    
    let nombreNewUser=document.getElementById("nombreNewUser").value
    let passNewUser=document.getElementById("passNewUser").value
    let emailNewUser=document.getElementById("emailNewUser").value
    if (nombreNewUser === ""|| passNewUser=== ""||emailNewUser==="" ){
        e.preventDefault();
        
      /*   return Swal.fire(
            'Sin valores?',
            'ingrese algun producto?',
            'question'
          ) */
          alert("error")
    }else{
        userNew=new UserNew(nombreNewUser,passNewUser,emailNewUser)
        descomponer=JSON.parse(localStorage.getItem("infUsuario"))
        navUsuario = document.getElementById("formInicioUser")
        navUsuario.innerHTML=`
        <form id="inicioSession">
            <input type="email" id="emailUsActive" placeholder="Ingrese email de usuario">
            <input type="password" id="passwUsActive" placeholder="Ingrese Contraseña">
            <button type="submit">Inicie Session </button>
            <button type="button" onclick="nuevoUser()">crear Usuario </button>
        </form>`
    }
})    