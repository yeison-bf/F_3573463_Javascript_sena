// Función para la alerta de exito

function alertaExito(props) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: props,
        showConfirmButton: false,
        timer: 1500
    });
}


async function ConfirmarEliminar(props) {

    const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: props,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, estoy seguro!",
        cancelButtonText: "Cancelar"
    });

    return result.isConfirmed;
}