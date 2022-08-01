
/*declaracion variable*/

const dataUser=[]
const shoppingCart=[]
const dataProducts=[]
let userActive=0
let userNew


/*carga de datos*/
fetch('JS/datosProductos.json')
    .then((resp)=>resp.json())
    .then((data)=>{
        let valores=JSON.stringify(data)
        localStorage.setItem("infProducts",valores)
    })
/*carga de usuarios y productos en storage*/
   /*  fetch('JS/datosUsuarios.json')
    .then((resp)=>resp.json())
    .then((data)=>{
            let valores=JSON.stringify(data)
            localStorage.setItem("infUsuario",valores)
            data.forEach(element=>{
                dataUser.push(element)
            })
    }) */

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
/*funcion guardar usuario*/
    function guardar(){
        dataUser.push(userNew)
        let valores=JSON.stringify(dataUser)
        localStorage.setItem("infUsuario",valores)
    }
    