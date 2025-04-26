detectarHash = () => {
    if (location.hash) {
        let seccion = location.hash.substring(1); // Quita el #

        switch (seccion) {
            case "trickerion":
                alert("¡Prepara tus mejores trucos de magia en Trickerion!");
                break;
            case "anachrony":
                alert("¡Activa tu exotraje y prepárate para viajar en el tiempo en Anachrony!");
                break;
            case "castillos":
                alert("¡Construye el mejor feudo en los Castillos de Borgoña!");
                break;
            case "daitoshi":
                alert("¡Desarrolla la ciudad más próspera de Japón en Daitoshi!");
                break;
            case "inventions":
                alert("¡Cambia el mundo con tus grandes inventos en Inventions!");
                break;
            default:
                alert(`Estás en la sección: ${seccion}`);
        }
    }
}