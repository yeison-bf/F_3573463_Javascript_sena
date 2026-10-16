let nombre=prompt("Ingrese nombredel empleado")
let cargo=parseInt(prompt("Deleccione el cargo:\n1:Administrador\n2: Tecnico\n3: Operario"))
let salarioBase=parseFloat(prompt("Ingrese su salario base"))
let calificacion=parseFloat(prompt("Ingrese su calificacion"))

let incentivo = 0
let bono = 0
let diasLibres = 0
let mensajes = ""

if (calificacion == 5){
    incentivo = salarioBase * 30 / 100;
}else if(calificacion >= 4 && calificacion < 5){
    incentivo = salarioBase * 20 / 100;
}else if(calificacion >= 3 && calificacion < 4){
    incentivo = salarioBase * 10 / 100;
}else{
    incentivo = 0
}

if(cargo == 2 && calificacion >= 4){
    bono = 150000
}

if(cargo == 3 && calificacion == 5){
    diasLibres = 1
}

if(salarioBase < 1500000 && calificacion < 3){
mensajes = "Evaluación critica y requiere seguimiento"
}



alert(`INFORMACIÓN DEL EMPLEADOS\n
    Nombre: ${nombre}
    Cargo: ${cargo==1 ? 'Administrador' : cargo == 2 ? 'Técnico' : 'Operario' }
    Salario Base: ${salarioBase}
    Calificación: ${calificacion}
    
    INFORMACIÓN DE PAGOS ADICIONALES
    Incentivo: ${incentivo}
    Dias libres: ${diasLibres}
    Observaciones: ${mensajes}\n
    TOTAL A PAGAR: ${(salarioBase+incentivo+bono)}`)

