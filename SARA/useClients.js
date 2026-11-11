
function validateAge() {
    let age = parseInt(document.getElementById("age").value)
    let text = document.getElementById("error_success_text")

    if (age < 18) {
        alert("Lo sentimos! eres menor de edad")
        document.getElementById("age").value = ""
        text.innerText = "Eres menor de edad"
    } else {
        text.innerText = "Edad aceptada..."
    }
}


// Funcion para calcular el salario
function calculateSalary(){
    let salary = parseInt(document.getElementById("salary").value);
    let day = parseInt(document.getElementById("day").value);
    let pay_for_day = parseInt(document.getElementById("pay_for_day").value);

    let total = salary + (day * pay_for_day)

    let Text_total = document.getElementById("total")
    Text_total.innerText= total || 0
}

// Función para capturar datos
function saveInfo() {

    let age = document.getElementById("age").value;
    let documentType = document.getElementById("documentType").value;
    let documentUser = document.getElementById("document").value;
    let name = document.getElementById("name").value;
    let lastname = (document.getElementById("lastname").value);
    let salary = parseInt(document.getElementById("salary").value);
    let day = parseInt(document.getElementById("day").value);
    let pay_for_day = parseInt(document.getElementById("pay_for_day").value);
    let total = document.getElementById("total").innerHTML;

 
    document.getElementById("documentResponse").innerText = "Documento: "+documentType+" : "+documentUser
    document.getElementById("fullnameResponse").innerText = "Nombre completo: "+name + " "+lastname
    document.getElementById("salaryResponse").innerText = "Salario: "+ salary
    document.getElementById("payDayResponse").innerText = "Días extras:  " + day
    document.getElementById("payDayResponse").innerText = "Valor por día extra: " + pay_for_day
    document.getElementById("payDayResponse").innerText = "Pago por días extras: " + ( (day * pay_for_day))
    document.getElementById("totalResponse").innerText = "Pago total : " + (salary + (day * pay_for_day))
}

