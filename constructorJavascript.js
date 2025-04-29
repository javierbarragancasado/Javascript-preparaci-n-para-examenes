/*
Un constructor es una función especial que se usa para crear objetos nuevos.

Es como un molde para fabricar muchos objetos similares pero con datos diferentes.

🔎 ¿Qué hace esto?

    function Persona(...) define un constructor (por convención, empieza en mayúscula).

    this.nombre y this.edad asignan propiedades al nuevo objeto que se va a crear.

    El new crea una copia del objeto usando ese molde.

🧩 Es como decir:

    “Quiero que cada persona tenga un nombre, una edad y un método para presentarse.
    Y quiero poder crear muchos de ellos fácilmente.”

⚠️ Importante:

    ¡No uses funciones flecha para constructores! → this no funcionaría bien.

    Siempre usa function Persona(...) con this y new.
*/
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.presentarse = function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

let javi = new Persona("Javi", 35);
let ana = new Persona("Ana", 28);

javi.presentarse(); // Hola, soy Javi...
ana.presentarse();  // Hola, soy Ana...
