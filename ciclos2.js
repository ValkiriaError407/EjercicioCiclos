alert("Productos disponibles: Vestidos, Zapatos, Camisetas, Carteras, Collares");

var consultaDeDescuento = prompt ("Consulte aqui si su producto tiene descuento");

tieneDescuento(consultaDeDescuento);

function tieneDescuento (consultaDeDescuento){
    let productos = ["Vestidos", "Zapatos", "Camisetas", "Carteras", "Collares"];
    let salida=true;
for (let i = 0; i < productos.length; i ++) {
    if ((productos [i] === consultaDeDescuento) && (i %2== 0) && salida ) {
        alert ("Producto con 50% de descuento");
        salida=false;
    }
    if ((productos [i] === consultaDeDescuento) && (i %2!= 0) && salida ){
        alert ("Producto sin descuento");
        salida=false;
    }
}
if (salida){
     alert ("Seguí buscando en nuestra web");
}
}