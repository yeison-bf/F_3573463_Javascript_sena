let login = 0
let optionCiclo2 = 0
do{
    
    let option = parseInt(prompt("1 sumar 2 restar"))

    if(option == 1){

        do{
            console.log("1")
            optionCiclo2 = parseInt(prompt("Deseas seguir 1: si - 2: no"))
        }while(optionCiclo2 != 2)
    }

    if(option == 2){
        console.log("Option 2 ")
    }

    login++
}while(login != 3)