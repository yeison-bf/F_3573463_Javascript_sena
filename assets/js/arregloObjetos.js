// Desarrolla un algoritmo que le permita al instructor, registrar los datos de sus aprendices: (Documento, nombre completo, estatus (Aprobado : Reprobado : En curso) )

let aprendices = []
alert("BIENVENIDO SARA : Sistema Auotmatizado de Registro de Aprendices")

let cantidad = parseInt(prompt(`¿Cuantos aprendices asisitieron?`))

for (let i = 0; i < cantidad; i++) {

    alert("DATOS DEL APRENDIZ")

    let documento = prompt("Documento del Aprendiz " + (i + 1))
    let nombreCompleto = prompt("Nombre completo del Aprendiz " + (i + 1))
    let status = parseInt(prompt(`Estaus del Aprendiz
1. Aprobado
2. Reprobado
3. En curso`))

    let aprendiz = {
        "documento": documento,
        "nombre": nombreCompleto,
        "status": status
    }

    aprendices.push(aprendiz)
}