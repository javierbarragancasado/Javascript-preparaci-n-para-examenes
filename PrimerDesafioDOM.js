
saludar = () => {
    let nombre = window.prompt("¿Cuál es tu nombre?");
    let confirmacion = window.confirm(`¿Tu nombre es ${nombre}?`);

    while (!confirmacion) {
        nombre = window.prompt("¿Cuál es tu nombre?");
        confirmacion = window.confirm(`¿Tu nombre es ${nombre}?`);
    }

    let nuevaVentana = window.open("bienvenido.html", `Bienvenido ${nombre}`);

    // ¡IMPORTANTE!
    nuevaVentana.onload = () => {
        nuevaVentana.document.getElementById("elH1").innerText = `¡Bienvenido ${nombre}!`;
    };
};