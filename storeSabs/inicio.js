
const obtenerDatos = () =>{

    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    console.log(parseInt(numero1)+parseInt(numero2))
}

let documentoExistente = 1234567890

function validar(){
   let documento  = document.getElementById("numero1").value

   let error = document.getElementById("errorDocumento")

   if(parseInt(documento) == documentoExistente){
        error.innerText = "El documento ya existe"
        document.getElementById("numero1").value = ""
   }
}