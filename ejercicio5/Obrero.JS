function boton (){
    let horas = parseInt(document.getElementById("horas").value);

    if (!horas || isNaN(horas)){
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    let salario = 0;

    if (horas <= 40){
       salario = horas * 10000;
    }else{
        salario = (40 * 10000) + ((horas - 40) * 15000);
    }

    salario_mensual = salario * 4;
    
    let  resultado = `
        <p>El salario del obrero semanal del obrero es: ${salario}</p>
        <p>El número de horas trabajadas es: ${horas}</p>
        <p>El obrero recibio por concepto de horas extras, la cantidad de: ${salario - (40 * 10000)}</p>
        <p>Si el obrero trabaja las otras 3 semanas del mes (Con la misma cantidad de horas), su salario mensual es: ${salario_mensual}</p>
    `;

    document.getElementById("pagii").innerHTML = resultado;
}

document.getElementById("boton").addEventListener("click", boton);