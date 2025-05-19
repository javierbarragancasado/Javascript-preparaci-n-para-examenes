window.addEventListener("load",()=>{
    let container=document.createElement("div");
    container.textContent=parseInt("2");
       // Aplicamos estilos directamente
    container.style.backgroundColor = "lightblue";   // Color de fondo
    container.style.color = "white";                 // Color del texto
    container.style.fontSize = "24px";               // Tamaño del texto
    container.style.padding = "20px";                // Espacio interno
    container.style.border = "2px solid darkblue";   // Borde
    container.style.textAlign = "center";            // Texto centrado
    container.style.width = "300px";                 // Ancho fijo
    container.style.margin = "20px auto";            // Centrado horizontal
    container.style.borderRadius = "10px";           // Bordes redondeados
    document.body.appendChild(container);

    container.addEventListener("dblclick",()=>{
        container.textContent*=2;;
    });

     
});