// Definición del Arreglo
let DatosProductos = []


// Función para guardar datos
function guardarDatos() {
    let producto = {
        id: DatosProductos.length+1,
        nombre: document.getElementById("nombre").value,
        categoria: document.getElementById("categoria").value,
        stock: document.getElementById("stock").value,
        precioC: document.getElementById("nombre").value,
        iva: document.getElementById("iva").value,
        precioV: document.getElementById("precioV").value,
        estado: true
    }

    DatosProductos.push(producto)
    alertaExito("Producto registrado exitosamente")

    ListarProductos()
    Limiar()
}

// Función para Listar
function ListarProductos() {
    let tabla = document.getElementById("tbody")
    tabla.innerHTML = ""
    DatosProductos.forEach((element, indice) => {
        let fila = document.createElement('tr')
        fila.innerHTML = `
                <th scope="row">${(indice + 1)}</th>
                <td>${element.nombre}</td>
                <td>${element.categoria}</td>
                <td>${element.stock}</td>
                <th>${element.precioC}</th>
                <td>${element.iva}</td>
                <td>${element.precioV}</td>
                <td>${element.estado ? 'Activo' : 'Inactivo'}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button onclick="BuscarEditar(${element.id})" type="button" class="btn btn-primary">Editar</button>
                        <button onclick="Elimnar(${indice})" type="button" class="btn btn-danger">Eliminar</button>
                    </div>
                </td>
        `
        tabla.appendChild(fila)
    });

    console.log(DatosProductos)
}


async function Elimnar(indice) {
    let response = await ConfirmarEliminar("hola")
    if (response) {

        DatosProductos.splice(indice, 1)
        ListarProductos()
    }
}



// Funcion de limpieza
function Limiar() {
    document.getElementById("nombre").value = ""
    document.getElementById("categoria").value = ""
    document.getElementById("stock").value = ""
    document.getElementById("precioC").value = ""
    document.getElementById("iva").value = ""
    document.getElementById("precioV").value = ""

}


// Funcion buscar y editar
function BuscarEditar(indice){

    console.log(indice)
    let encontrado = DatosProductos.find((element) => element.id == indice)
    console.log(encontrado)

    document.getElementById("nombre").value = encontrado.nombre
    document.getElementById("categoria").value = encontrado.categoria
    document.getElementById("stock").value = encontrado.stock
    document.getElementById("precioC").value = encontrado.precioC
    document.getElementById("iva").value = encontrado.iva
    document.getElementById("precioV").value = encontrado.precioV

}



ListarProductos()