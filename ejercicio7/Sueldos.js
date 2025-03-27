
function ingresar_s() {
    const cantidad = parseInt(document.getElementById('c_s').value);
    const divSueldos = document.getElementById('sueldos_i');
    divSueldos.innerHTML = ''; // Limpiar entradas anteriores

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor ingrese una cantidad válida de sueldos.");
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        divSueldos.innerHTML += `
            <label for="sueldo${i}">Sueldo ${i + 1}:</label>
            <input type="number" id="sueldo${i}" placeholder="Valor del sueldo ${i + 1}" required><br>`;
    }

    document.getElementById('divSueldos').style.display = 'block'; // Mostrar inputs de sueldos
}

function calcular_s_m() {
    const cantidad = parseInt(document.getElementById('c_s').value);
    let sueldos = [];
    for (let i = 0; i < cantidad; i++) {
        const sueldo = parseFloat(document.getElementById(`sueldo${i}`).value);
        sueldos.push(sueldo);
    }

    let s_m = sueldos[0]; // Sueldo máximo inicial
    for (let i = 1; i < sueldos.length; i++) {
        if (sueldos[i] > s_m) {
            s_m = sueldos[i];
        }
    }

    document.getElementById('divResultado').innerText = `El sueldo máximo es: $${s_m}`;
}