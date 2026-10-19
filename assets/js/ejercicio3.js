let resp = 1
while (resp == 1){
    let numero = parseInt(prompt("Digite La Tabla Que Desea Saber: "))
    let data = ""
    for(let i=1; i<=10; i++){
        data+=(`${numero} * ${i} = ${i*numero}\n`)
    }
    alert(data)
    resp = parseInt(prompt("\n Desea Continuar? \n 1. Si \n 2. No \n"))
}
alert("Ciclo Terminado.")