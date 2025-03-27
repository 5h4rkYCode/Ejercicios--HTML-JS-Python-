function boton() {
    let nombre = document.getElementById("nombre").value;
    let cc = document.getElementById("cc").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let modelo = document.getElementById("modelo").value;
    let especialidad = document.getElementById("especialidad").value;

    // Validar entradas
    if (!nombre || !cc || isNaN(precio) || !modelo || !especialidad) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    // Calcular precio final
    // 100**3 = 1000000 (1M)
    let descuento = precio >= 1000000  ? precio - (precio * 0.10) :  precio; // Aplicar descuento si el precio es mayor o igual a 1M
    let precioFinal = descuento; // El precio ya incluye el descuento si aplica
    let iva = precioFinal * 0.19; // Calcular el IVA
    precioFinal = precioFinal + iva; // Sumar el IVA al precio final
    precioFinal = precioFinal.toFixed(2); // Formatear a 2 decimales

    // Generar resultado
    let resultado = `
        <p>El nombre del cliente es: <strong>${nombre}</strong></p>
        <p>El número de cédula del cliente es: ${cc}</p>
        <p>El precio del computador es: ${precio}</p>
        <p>El precio con descuento aplicado es: ${descuento}</p>
        <p>El modelo del computador es: ${modelo}</p>
        <p>El IVA del computador es: ${iva.toFixed(2)}</p>
        <p>La especialidad del computador es: ${especialidad}</p>
        <p>El precio final del computador es: ${precioFinal}</p>
    `;

    // Agregar un frame de video si aplica
    if (especialidad.toLowerCase() === "gamer") {
        resultado += `
            <p>¡Perfecto para gaming! Mira este video:</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Cn669LdSUx0"
            title="Video Gamer" frameborder="0" allowfullscreen>
            </iframe>
        `;
    } else if (modelo.toLowerCase() === "apple") {
        resultado += `
            <p>¡Elegiste un modelo Apple!:</p>
            <p>No te daria penita? :(</p>
        `;
    }

    // Mostrar resultado
    document.getElementById("pagi").innerHTML = resultado;
}

// Asociar evento al botón
document.getElementById("boton").addEventListener("click", boton);