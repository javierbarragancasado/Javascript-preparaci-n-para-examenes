document.addEventListener("DOMContentLoaded", () => {

    // ---------- FORMULARIO 1: Intentos con cookies ----------
  
    const formularioIntentos = document.getElementById("formularioIntentos");
    const contenedorIntentos = document.getElementById("intentos");
  
    function getCookie(nombre) {
      let cookies = document.cookie.split("; ");
      for (let c of cookies) {
        let [clave, valor] = c.split("=");
        if (clave === nombre) return parseInt(valor);
      }
      return 0;
    }
  
    function setCookie(nombre, valor) {
      document.cookie = `${nombre}=${valor}; path=/`;
    }
  
    formularioIntentos.addEventListener("submit", (e) => {
      e.preventDefault();
      let intentos = getCookie("intentos");
      intentos++;
      setCookie("intentos", intentos);
      contenedorIntentos.textContent = `Intentos de envío del formulario: ${intentos}`;
    });
  
    // ---------- FORMULARIO 2: Mayúsculas con blur ----------
  
    const inputNombreMayus = document.getElementById("nombreMayus");
    const inputApellidosMayus = document.getElementById("apellidosMayus");
  
    inputNombreMayus.addEventListener("blur", () => {
      inputNombreMayus.value = inputNombreMayus.value.toUpperCase();
    });
  
    inputApellidosMayus.addEventListener("blur", () => {
      inputApellidosMayus.value = inputApellidosMayus.value.toUpperCase();
    });
  
    // ---------- FORMULARIO 3: Validación de nombre/apellidos ----------
  
    const formularioValidacion = document.getElementById("formularioValidacion");
    const inputNombreValid = document.getElementById("nombreValid");
    const inputApellidosValid = document.getElementById("apellidosValid");
    const contenedorErroresValid = document.getElementById("erroresValid");
  
    formularioValidacion.addEventListener("submit", (e) => {
      contenedorErroresValid.innerHTML = "";
      let errores = [];
  
      if (inputNombreValid.value.trim().length < 3) {
        errores.push("El nombre debe tener al menos 3 letras.");
        inputNombreValid.focus();
      } else if (inputApellidosValid.value.trim().length < 3) {
        errores.push("Los apellidos deben tener al menos 3 letras.");
        inputApellidosValid.focus();
      }
  
      if (errores.length > 0) {
        e.preventDefault();
        contenedorErroresValid.innerHTML = errores.join("<br>");
      }
    });
    // ---------- FORMULARIO 4: Validación de edad ----------
    const inputEdad=document.getElementById("inputEdad");
    const contenedorErroresEdad=document.getElementById("erroresEdad");

    inputEdad.addEventListener("input", () => {
        const edad=parseInt(inputEdad.value);
        if (isNaN(edad) || edad < 0 || edad > 120) {
            contenedorErroresEdad.textContent="Edad no válida. Debe ser un número entre 0 y 120.";
        }
        else {
            contenedorErroresEdad.textContent="Perfecto. Edad válida.";
        }
    });
    // Validación al enviar el formulario
    formEdad.addEventListener("submit", (e) => {
        const edad = parseInt(inputEdad.value);
        if (isNaN(edad) || edad < 0 || edad > 120) {
          e.preventDefault();
          contenedorErroresEdad.textContent = "No puedes enviar. Edad inválida.";
          inputEdad.focus();
        }
      });
// ---------- FORMULARIO 5: Validación de NIF ----------
      const formNif = document.getElementById("formNif");
const inputNif = document.getElementById("inputNif");
const erroresNif = document.getElementById("erroresNif");

formNif.addEventListener("submit", (e) => {
  erroresNif.innerHTML = "";

  const valor = inputNif.value.trim();
  const patronNif = /^\d{8}-[A-Za-z]$/;

  if (!patronNif.test(valor)) {
    e.preventDefault();
    erroresNif.textContent = "Formato incorrecto. Debe ser 8 números, guion y una letra (ej: 12345678-Z)";
    inputNif.focus();
  }
});

// ---------- FORMULARIO 6: Validación de email ----------

const formEmail=document.getElementById("formEmail");
const inputEmail=document.getElementById("inputEmail");
const erroresEmail=document.getElementById("erroresEmail");

formEmail.addEventListener("submit", (e) => {

    erroresEmail.innerHTML = "";

   let valorInput=inputEmail.value.trim();
   let patronEmail=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;
   if(!patronEmail.test(valorInput)){
    erroresEmail.textContent="Formato incorrecto. Debe ser un email válido (ej: elpulpo@gmail.com)";
    e.preventDefault();
    inputEmail.focus();
   }
});

let selectProvincia=document.getElementById("selectProvincia");
let erroresProvincia=document.getElementById("erroresProvincia");

selectProvincia.addEventListener("change", () => {
 if(selectProvincia.value==="porDefecto"){
    erroresProvincia.textContent="Debes seleccionar una provincia.";
    selectProvincia.focus();
 
}
  else {
    erroresProvincia.textContent="Todo correcto. Gracias por seleccionar una provincia. Enseguida te enviamos el paquete a " + selectProvincia.value;
  }
});

let formFecha=document.getElementById("formFecha");
let inputFecha=document.getElementById("inputFecha");
let erroresFecha=document.getElementById("erroresFecha");

formFecha.addEventListener("submit", (e) => {
    erroresFecha.textContent="";
    let patronFecha1=/^\d{2}[-\/]\d{2}[-\/]\d{4}$/
    if(!patronFecha1.test(inputFecha.value.trim())){
        e.preventDefault();
        erroresFecha.textContent="Formato incorrecto. Debe ser dd/mm/aaaa o dd-mm-aaaa";
        inputFecha.focus();
    }else{
        e.preventDefault();
        erroresFecha.textContent="Formato correcto. Gracias por enviar la fecha.";
    }
   

});
let formTelefono=document.getElementById("formTelefono");
let inputTelefono=document.getElementById("inputTelefono");
let erroresTelefono=document.getElementById("erroresTelefono");

formTelefono.addEventListener("submit", (e) => {
 
    erroresTelefono.textContent="";
    let patronTelefono=/^\d{9}$/;
    if(!patronTelefono.test(inputTelefono.value.trim())){
        e.preventDefault();
        erroresTelefono.textContent="Formato incorrecto. Introduzca un teléfono válido.";
    }else{
        e.preventDefault(); // evitamos el envío del formulario
        erroresTelefono.style.color="green";
        erroresTelefono.textContent="Teléfono añadido, gracias";
        setTimeout(() => {
            formTelefono.submit(); // enviamos el formulario manualmente
          }, 2000); // espera 2 segundos antes de enviarlo
        }
    }




);

let formHorario=document.getElementById("formHora");
let inputHora=document.getElementById("inputHora");
let erroresHora=document.getElementById("erroresHora");

formHorario.addEventListener("submit", (e)=>{
 
    erroresHora.textContent="";
    let patronHora=/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/
    if(!patronHora.test(inputHora.value.trim())){
        e.preventDefault();
        erroresHora.textContent="Formato incorrecto. Debe ser hh:mm (max 23:59)";
        inputHora.focus();
    }else{
        e.preventDefault();
        erroresHora.style.color="green";
        erroresHora.textContent="Hora añadida, gracias";
        setTimeout(() => {
            formHorario.submit(); // enviamos el formulario manualmente
          }, 2000); // espera 2 segundos antes de enviarlo
    }

});

});