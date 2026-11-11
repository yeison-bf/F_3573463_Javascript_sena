// Variables globales
// Defino donde guardar los datos : Arreglo (Array)
let dataStudents = []
let cantidad = 0

// Función del Menu Inicial
function Start() {
    // Variable para escoger la opción.
    let OptionBar;

    // Ciclo para mostrar el menú
    do {
        OptionBar = parseInt(prompt(`BIENVENIDOS A SARA
        Elige una Opcion
        1. Crear Aprendices
        2. Listar Aprendices
        3. Buscar un Aprendiz
        4. Actualizar un Aprendiz
        5. Eliminar un Aprendiz
        6. Salir de SARA`))

        switch (OptionBar) {
            case 1:
                Create()
                break;

            case 2:
                ReadData()
                break;

            case 3:

                break;

            case 4:

                break;

            case 5:

                break;

            case 6:
                alert("Adios...")
                break;


        }
    } while (OptionBar != 6)
}

// ------------------------------------
// Funciones de las opciones
// ------------------------------------


// Función para crear 
function Create() {
    alert("Creando el aprendíz")
    let status = true;
    do{

        let infoStudent = {
            "typeDocument": parseInt(prompt("Tipo de Identidad")),
            "document": parseInt(prompt("Documento")),
            "fullName": parseInt(prompt("Nombre Completo")),
            "email": parseInt(prompt("Correo Electronico")),
            "phone": parseInt(prompt("Telefono")),
            "status": true,
            "program": parseInt(prompt("Programa Matriculado")),
        }
    
        dataStudents.push(infoStudent)
        cantidad++
        let next = parseInt(prompt(`¿Desea registrar otro aprendíz?
            1: SI
            2: NO`)) 

        if(next == 2) status = false 

    }while(status)
}

// Función para listar los datos
function ReadData() {
    console.log("Longitud : ", dataStudents.length)
    
    // Recorremos el arreglo  : ciclo for
    for(let i=0; i<dataStudents.length; i++){
        

    }
}



// Llamado de la función Start
Start()