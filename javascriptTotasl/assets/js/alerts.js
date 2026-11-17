function alertaExitosa(proceso) {
    Swal.fire({
        title: proceso,
        icon: "success",
        draggable: false,
showConfirmButton: false,
    });
}

function alertaError() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error en el proceso",
        footer: "<a href=\"#\">Why do I have this issue?</a>"
    });
}