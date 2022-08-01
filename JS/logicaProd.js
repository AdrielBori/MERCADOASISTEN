

function agCarrito(pick){
    if(pick.name === "agregar"){
        let busq=pick.id
        const pro=dataProducts.findIndex(pr=> pr.nombre=== busq)
            
            shoppingCart.push(dataProducts[pro])
            
            const produtsList= document.getElementById('carrito')
            const tarjeta=document.createElement('div');
            tarjeta.innerHTML=`<div class="compra">
                <span>prod: ${dataProducts[pro].nombre}</span>
                    <span>precio:$ ${dataProducts[pro].precio}</span>
                `
                produtsList.appendChild(tarjeta)
                console.log(tarjeta)
    }
}





document.getElementById("productsOnSale").addEventListener('click',function(e){
    agCarrito(e.target);
    console.log(e.target)
})