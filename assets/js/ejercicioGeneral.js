
let userName = "bfunieles"
let passwordName = "B123456F"

// Variable de intentos 
let intentos = 1

do {
    let setUser = prompt("Usuario de acceso").toLocaleLowerCase()
    let setPassword = prompt("Password de acceso")

    if (setUser == userName && setPassword == passwordName) {

        let option = 0
        do {
            option = parseInt(prompt(`¿Que ejercición desea ejecutar?:
                1. Ejercicio 1
                2. Ejercicio 2
                3. Ejercicio 3
                4. Ejercicio 4
                5. Cerrar Sesión
                `))
            switch (option) {
                case 1:
                    alert("caso 1")
                    break;

                case 2:
                    alert("caso 2")
                    break;

                case 3:
                    let resp = 1
                    while (resp == 1) {
                        let numero = parseInt(prompt("Digite La Tabla Que Desea Saber: "))
                        let data = ""
                        for (let i = 1; i <= 10; i++) {
                            data += (`${numero} * ${i} = ${i * numero}\n`)
                        }
                        alert(data)
                        resp = parseInt(prompt("\n Desea Continuar? \n 1. Si \n 2. No \n"))
                    }
                    alert("Ciclo Terminado.")
                    break;

                    '' `` 

                case 4:
                    alert("caso 4")
                    break;

                case 5:
                    alert("caso 5")
                    break;

                default:
                    alert("Opcion errada")

            }
        } while (option != 5)


    } else {
        alert("Credenciales incorrestas")
        intentos++
    }

    if (intentos == 3) {
        alert("Cantidad intentos superados\nTu usuario ha sido bloqueado")
    }

} while (intentos <= 3)

