let arreglo = []
let numeroElegido = parseInt(prompt("Digita un número"))

for(let i = 0; i< numeroElegido; i++){
    arreglo[i] = i+"B"
}

// Voy a recorrer el arreglo hasta su ultimo dato : longitud 
let posicion = parseInt(prompt("Posicion a buscar "))
// for(let i = 0; i< arreglo.length; i++){
//     if(posicion<=numeroElegido){
//         console.log(arreglo[posicion])
//     }else{
//         console.log("Fuera De Rango.")
//     }
// }

if(posicion > arreglo.length-1){
    console.log("te pasaste")
}else{
    console.log(arreglo[posicion])
}