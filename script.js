
//Creación de los objetos javascript a partir de los elementos del DOM

const inputText = document.getElementById('w-message');
const displayText = document.getElementById('r-message');
const btnSend = document.getElementById('send');
const btnRead = document.getElementById('read');
const btnCopy = document.getElementById('copiar');
let input = document.getElementById('w-message');
let output = document.getElementById("r-message");
let recibido = output.value;

//la función enviar se encarga de validar el contenido y responder de acuerdo a este, si cumple, invoca la función codificar.

function enviar(){
    let mensaje = input.value;
    if(mensaje != ""){
        output.value= mensaje;
        input.value="";
        output.value=codificar(mensaje);
        alert("Ha recibido un mensaje");
        
    }
    else{
        alert("No ha ingresado un mensaje");
        output.value="";
    }
   

  } 

  //la función decifrar funciona de forma similar a la función enviar e invoca la función decodificar.

  function decifrar(){
    let mensaje = input.value;
    if(mensaje != ""){
        output.value= mensaje;
        input.value="";
        output.value=decodificar(mensaje);
        alert("Se ha decifrado el mensaje");
        
    }
    else{
        alert("No ha ingresado un mensaje");
        output.value="";
    }
 } 


  //Esta función nos permite analizar el proceso de codificación.

  function codificar(palabra){

    let encriptado="";	

    palabra = palabra.toLowerCase();
            
    for (var i=0;i<palabra.length;i++){

        if(palabra[i]=="a"){
            
            encriptado=encriptado.concat("ai");
        }
        else if(palabra[i]=="e"){
            
            encriptado=encriptado.concat("enter");
        }
        else if(palabra[i]=="i"){
            
            encriptado=encriptado.concat("imes");
        }
        else if(palabra[i]=="o"){
            
            encriptado=encriptado.concat("ober");
        }
        else if(palabra[i]=="u"){
            
            encriptado=encriptado.concat("ufat");
        }
        else{
            encriptado=encriptado.concat(palabra[i]);
        }
        
        //input.value=encriptado;
    }
    
    return encriptado;
}
//Decodificar es mas sencillo creando una matríz.
function decodificar(palabra){
		
    let matrixCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
      palabra = palabra.toLowerCase();
      for(let i = 0; i < matrixCode.length; i++){
        if(palabra.includes(matrixCode[i][1])){
          palabra = palabra.replaceAll(matrixCode[i][1],matrixCode[i][0]);
        }
    }
        return palabra;
}


  //Función para vacíar los campos de texto.
  function borrar(){
    input.value="";
    output.value="";
    alert("Borrando...");
  }

//Se agrega evento al boton copiar para poder hacer uso de la función select
  btnCopy.addEventListener('click', (e) => {
    e.preventDefault();
    const copia = document.querySelector("#r-message");
    copia.select();
    navigator.clipboard.writeText(copia.value);
    input.focus();
    

}) 
