let opcion = 0
let saldoInicial = 1000000;
do {
    opcion = parseInt(prompt(`Seleccione una opcion:
        1. Consultar
        2. Retira
        3. Consignar
        4. Salir
        `))

        switch(opcion){
            case 1:
                alert(`Tus saldo actual es de ${saldoInicial}`)  
                break;
            case 2:
                let retiro = parseInt(prompt(`
                    Tus saldo actual es de ${saldoInicial}
                    ¿Cuanto deseas retirar?`))
                if(retiro > saldoInicial){
                    alert("Lo sentimos! Saldo insuficiente")
                }else
                saldoInicial = saldoInicial - retiro
                alert(`Retiro exitoso, tu saldo final es de $${saldoInicial}`)
                break;
            case 3:
               let consignar = parseInt(prompt(`
                    Tus saldo actual es de ${saldoInicial}
                    ¿Cuanto deseas consignar?`))
                
                saldoInicial = saldoInicial + consignar
                alert(`Consignación exitosa, tu saldo final es de $${saldoInicial}`)
                
                break;
            case 4:
                alert("Gracias.. Adios")    
                break;
            default:
                alert("Oe pirobo, usted ve la opcion 9 o que? sea serio hermano...")
        }

} while (opcion != 4);