// const usuario = "bfunieles"
// const password = "Hola123!"

// let user = prompt("Digite su usuario")
// let pass = prompt("Digite su contraseña")

// if(usuario == user || password == pass){
//     alert("Acceso exitoso")
// }else{
//     alert("Credenciales incorrectas")
// }

let peso=parseFloat(prompt("ingrese su peso:"))
let estatura=parseFloat(prompt("ingrese su estatura:"))
let imc=peso/estatura**2
if(imc <18.5){
    alert("bajo peso")
}else if(imc>=18.5 && imc<=24.9){
    alert("peso normal")
}else if (imc>=25.0 && imc>29.9 ){
    alert("sobrepeso")
}else{
    alert("error")
}

    