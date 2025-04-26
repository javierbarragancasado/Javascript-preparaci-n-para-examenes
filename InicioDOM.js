let persona = {
    nombre: "",
    edad: 36,
    saludar: function() {
        this.nombre = prompt("¿Cómo te llamas?");
        document.getElementById("saludo").innerText = "Hola, soy " + this.nombre + " y tengo " + this.edad + " años.";
    }
};