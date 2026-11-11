// Objetos
// ARREGLO VACIO
let empleados = []
let i = 1

let cantidad  = parseInt(prompt("¿c d r?"))
// Objeto de una persona
while (i <= cantidad) {

    let empleado = {
        "documento": prompt("Documento"),
        "nombre": prompt("Nombre"),
        "edad": prompt("Edad"),
        "direccion": prompt("Dirección"),
        "telefono": prompt("Telefono")
    }
    empleados.push(empleado)
    i++;
}

console.log(empleados)
