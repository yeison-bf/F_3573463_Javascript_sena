let listaUsuarios = []

const calcularImc = () => {

    let nombre = document.getElementById("nombre").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let estado = ""
    if (!nombre || !peso || !altura) {
        notificacion("error",)
    } else {
        let imc = peso / (altura * altura)
        let color = "primary"

        if (imc > 29) {
            estado = "Obeso"
            color = "danger"
        }

        // notificacion("resultado", nombre, peso, altura, imc, estado, color)

        listaUsuarios.push({
            nombre, peso, altura, imc, estado
        })

        listarDatos()

    }


}

// Función para la alerta
function notificacion(tipo, nombre, peso, altura, imc, estado, color) {

    let divAlert = document.getElementById("alertDiv")

    if (tipo == "resultado") {
        divAlert.innerHTML = `
            <div class="alert theme-${color} flex-column" role="alert">
                <p>Nombre: ${nombre}</p>
                <p>Peso: ${peso}</p>
                <p>Altura: ${altura}</p>
                <p></p>
                <p>IMC calculado: ${imc}</p>
                <p>Tu estado es : ${estado}</p>

            </div>
        `
    } else if (tipo == "error") {
        divAlert.innerHTML = `
            <div class="alert theme-danger flex-column" role="alert">
                <p>Campos obligatrotios</p>
                
            </div>
        `
    }
}


function listarDatos() {
    let divAlert = document.getElementById("alertDiv")

    let usuario = ""
    listaUsuarios.forEach((value, index) => {
        usuario += `
            <div class="alert theme-primary flex-column" role="alert">
                <p>Nombre: Usuario No ${index+1}</p>
                <p>Nombre: ${value.nombre}</p>
                <p>Peso: ${value.peso}</p>
                <p>Altura: ${value.altura}</p>
                <p></p>
                <p>IMC calculado: ${value.imc}</p>
                <p>Tu estado es : ${value.estado}</p>

            </div>

        `
    })

    divAlert.innerHTML = usuario
}







