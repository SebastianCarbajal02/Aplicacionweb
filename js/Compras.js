


//Creamos los arreglos precios ya que estos almacenara los precios de las prendras
var precios=[220,200,150,50]
var compra=0;
var descuento=0;
var total= 0;
var cantidad=0;
var pagar=0;


//Creamos una variable 
var nombre=prompt("Ingrese su nombre");
document.write("<p>Su nombre es:" +nombre+"</p>");

function Camisa(){
   cantidad = prompt("Ingresa la cantidad de Camisa");
    compra = precios[1] * cantidad;
    alert(cantidad + " Camisas añadidas");
    Operaciones();
    
}

function Pantalones(){
    cantidad = prompt("Ingresa la cantidad a comprar");
    compra = precios[0] * cantidad;
    alert(cantidad + " Pantalones añadidos");
    Operaciones();
}

function Medias(){
     cantidad = prompt("Ingresa la cantidad a comprar");
    compra = precios[3] * cantidad;
    alert(cantidad + " Medias añadidos");
   Operaciones();
}

function Bermudas(){
   cantidad = prompt("Ingresa la cantidad a comprar");
    compra = precios[2] * cantidad;
    alert(cantidad + " Bermudas añadidas");
    Operaciones();

}

//Creamos uno funcion operacion para poder realizar las operaciones de las prendras
function Operaciones(){
    
   if(compra<1000){
       descuento=0;
       pagar=compra;
       total+=pagar; 
        document.getElementById("Precio").innerHTML = ("Precio: " + compra);
        document.getElementById("Subtotal").innerHTML = ("Descuento: "+descuento);
        document.getElementById("Total").innerHTML = ("Total: " + total);
    }
    else if(compra<2500){
        descuento =compra* 0.15;
        pagar = compra - descuento;
        total+=pagar;
        document.getElementById("Precio").innerHTML = ("Precio: " + compra);
        document.getElementById("Subtotal").innerHTML = ("Descuento: " + descuento);
        document.getElementById("Total").innerHTML = ("Total: " + total);
    }
    else if(compra<4000){
        descuento = compra * 0.3;
        pagar= compra - descuento;
        total+=pagar;
        document.getElementById("Precio").innerHTML = ("Precio de compra: " + compra);
        document.getElementById("Subtotal").innerHTML = ("Descuento: " + descuento);
        document.getElementById("Total").innersHTML = ("Total: " + total);
    }
    else if(compra>=4000){
        descuento = compra * 0.50;
        pagar = compra - descuento;
        total+=pagar;
        document.getElementById("Precio").innerHTML = ("Precio de compra: " + compra);
        document.getElementById("Subtotal").innerHTML = ("Descuento: " + descuento);
        document.getElementById("Total").innerHTML = ("Total: " + total);
    }
}


//Creamos esta variable limpiar() limnpiaremos la cajas del textos
function limpiar(){
    compra=0;
    total=0;
    Operaciones();

}
