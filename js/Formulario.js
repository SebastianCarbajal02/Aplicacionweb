
//Creamos 2 variable con esto y con esto podemos hacemos referencia al tipo de cajitas 

var correo=document.querySelector("input[type='text']");

var clave =document.querySelector("input[type='password']");



correo.addEventListener("focus",function(evento){

   evento.target.style.color="green";
   });
   clave.addEventListener("focus",function(evento){
      evento.target.style.background="black";
      evento.target.style.color="white";
      });
      
//Creamos uno arreglos para correo y las claves

var Correos =["Sebas@gmail.com","Jorgito@gmail.com","Diluc@gmail.com"];

var claves=["Contra1","Contra2","Contra3"];


function cargar(frm){

    //Obtenemos el valor ingresado en la cajita de textocorreo y lo guardamos en la variable "correo"
    
    let correos=frm.txtcorreo.value;
    let contrasena=frm.txtclave.value;
    let i=-1;
    if(correos.length == 0 || contrasena.length == 0){
        alert("Estimado Usuario, ingrese sus datos"); return;
    }
    
    //Recoremos nuestro Arreglos "Correos"
    
    for(let j=0;j<Correos.length;j++){
        
        if(Correos[j]==correos){
            i=j;break;
        }
    }
    if(i==-1){
    
        window.event.preventDefault();
        alert("Correo ingresado incorrecto");return;
    }
    if(contrasena==claves[i]){
        window.event.preventDefault();
        alert("Bienvenido 😊");
    }
    else{    
        alert("Su contraseña no coincide :(");
    }
    }
