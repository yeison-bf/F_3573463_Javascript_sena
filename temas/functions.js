// Funciones

// Función anónima
const ImprimirNombre = function(nombre="Juana de Arco"){
    alert(nombre)
}

// Función flecha
const CalcularEdad = (edad) => {
    if(edad > 18){
        alert("Si puede pasar")
    }else{
        alert("No puede pasar")
    }
}



// Crea un algotirmo que diga si puede o no puede ingresar

let opcionOperacion = parseInt(prompt(`Elije una operación
    1. Sumar
    2. Restar
    3. Multiplicar`))

let numero = parseInt(prompt("¿De que número quieres la operación?"))

switch (opcionOperacion) {
    case 1:
        // CalcularOperacion(numero, "+")
        ImprimirNombre("Catalina")
        break

    case 2:
        // CalcularOperacion(numero, "-")
        CalcularEdad(25)
        break;

    case 3:
        CalcularOperacion(numero, "*")
        break

    default:
        break
}


// Funcion de calcular1
function CalcularOperacion(numero, operacion) {

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} ${operacion} ${i} = ${operacion =="+" ? (numero + i) : operacion == "- " ? (numero - i) : (numero * i)}`)
    }
}
