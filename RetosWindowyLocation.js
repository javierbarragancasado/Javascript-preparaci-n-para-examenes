
//-------------------------------------------------RETO 1-------------------------------------------------//
muestraEstilo = () => {

    alert("¡Hola! Mi ancho es: " + window.innerWidth + " px y mi alto es: " + window.innerHeight + " px .\n\n");

     /*También podría haber sido :
    
     alert(`¡Hola! Mi ancho es: ${window.innerWidth} px  y mi alto es:  ${ window.innerHeight} px .\n\n`)
     */
     

}
//-------------------------------------------------RETO 2-------------------------------------------------//

redireccion = () => {
location.assign("https://wikipedia.org/");    
}

//-------------------------------------------------RETO 3-------------------------------------------------//

Informacion = () => {
    
    console.log(`${window.location.href}`); // Muestra la URL en la consola
    console.log(window.location.hostname); // Muestra el nombre de host en la consola
    console.log(window.location.pathname); // Muestra la ruta en la consola
    console.log(window.location.protocol); // Muestra el protocolo en la consola
    console.log(window.location.port); // Muestra el puerto en la consola
    console.log(window.location.search); // Muestra la cadena de consulta en la consola
    console.log(window.location.hash); // Muestra el fragmento en la consola
    console.log(window.location.origin); // Muestra el origen en la consola
    }
//-------------------------------------------------RETO 4-------------------------------------------------//

recargar=()=>{
    location.reload(); // Recarga la página actual
 
}