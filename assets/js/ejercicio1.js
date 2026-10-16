let nombre = prompt("Nombre: ")
let edad = parseInt(prompt("Edad: "))
let salarioBase = parseFloat(prompt("Salario base: "))
let tipoContrato = prompt("1: Planta\n2: Temporal\n3: Practicante")
let horasExtras = parseInt(prompt("Cantidad de horas laboradas:"))


// Total a pagar
let totalPago = 0
// Condicion para Usuarios de planta
if(tipoContrato == 1 || tipoContrato == 2){
    let bono = 0;
    if(tipoContrato == 1){
        bono = 300000
    }else{
        bono = 150000
    }
    totalPago = salarioBase + bono
    totalPago = totalPago + (horasExtras * 20000)

    let hijos = parseInt(prompt("¿Tiene hijos? 1: SI - 2: NO"))
    if(hijos == 1){
        totalPago = totalPago + 100000
    }

    console.log("total a pagar: ",totalPago)
}


// Condicon para el usuario Practicante
if(tipoContrato == 3){
    totalPago = salarioBase
    if(horasExtras > 10 ){
        totalPago = totalPago + ((horasExtras-10) * 10000)
    }

    if(edad < 18){
        console.log("Tienes que venir con un tutor")
    }

    console.log("total a pagar: ",totalPago)
}
