// Variables Globales
// El arreglo para almacenar los datos
let dataUsers = [
   
];


// CRUD

// CREATE : CREAR : ( NUEVO REGISTRO )
// Función declarada
function CrearUsuario(){

    // Variables para capturar datos
    let tipoDocumento = document.getElementById("tipoDocumento").value; 
    let documento = document.getElementById("documento").value; 
    let nombre = document.getElementById("nombre").value; 
    let email = document.getElementById("email").value; 
    let telefono = document.getElementById("telefono").value; 
    let estado = true

    dataUsers.push({
        tipoDocumento,
        documento,
        nombre,
        email,
        telefono,
        estado
    })

    alertaExitosa("Cliente registrado exitosamente");

    setTimeout(() => {
        window.location.replace('/index.html')
    }, 1500);

}



// READ = LEER  ( LISTAR )
// Función de flecha
const ListarDatos = () =>{

    let alertDeDatos = document.getElementById("alertaDatos")

    if(dataUsers.length < 1){
        alertDeDatos.innerHTML = `
            <div class="alert theme-danger" role="alert">
                <p>Lo sentimos! no se tienen datos</p>
            </div>
        `
    }


}



