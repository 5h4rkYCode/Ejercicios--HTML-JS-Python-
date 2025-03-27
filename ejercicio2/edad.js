function boton (){
    let naci = document.getElementById("nacimiento").value;
    let actu = document.getElementById("actual").value;

    let edad = actu - naci;
    let resultado = `
        <p>La edad del cliente es: <strong>${edad}</strong></p>
    `;

    if (edad >= 18) {
        resultado += `
            <p>¡Eres mayor de edad!</p>
        `;
    }
    else {
        resultado += `
            <p>¡Eres menor de edad!</p>
        `;
    }

    document.getElementById("resultado").innerHTML = resultado;
    
}

document.getElementById("boton").addEventListener("click", boton);
