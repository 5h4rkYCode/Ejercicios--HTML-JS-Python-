function boton() { //Esta función se ejecuta al hacer click en el botón
    let articulo = document.getElementById("articulo").value; // Aquí estamos llamando al valor que se le ha asignado a la variable en html
    let clave = document.getElementById("clave").value; // Aquí también estamos llamando al valor 

    let precio_original = parseFloat(0); // Aquí estamos asignando un valor a la variable
    let descuento = 0;

    if (articulo === "1") { // Aquí estamos asignando un valor a la variable escogida por el usuario.
        precio_original = 6500;
    } else if (articulo === "2") { 
        precio_original = 9500;
    } else if (articulo === "3") {
        precio_original = 15000; 
    } else if (articulo === "4") {
        precio_original = 32000;
    }
    
    if (clave === "1"){ //Aquí estamos asignando una operación a la variable escogida por el usuario.
      //Ya sea clave 1 o 2
        descuento = precio_original * 0.10;
    } else if (clave === "2"){
        descuento = precio_original * 0.20;
    }

    //Ahora vamos a imprimir el resultado en el HTML
    let resultado = `
        <p>El precio original del artículo es: $${precio_original}</p>
        <p>El precio con el descuento aplicado es: $${precio_original - descuento}</p>
        <p>El descuento aplicado es: $${descuento}</p>
    `;

    document.getElementById("divResultado").innerHTML = resultado; //Aquí estamos llamando al div en el HTML para que se muestre el resultado

}

document.getElementById("boton").addEventListener("click", boton);//Aquí estamos llamando al botón en el HTML para que se ejecute la función al hacer click en el botón