//Desarrollo del script dentro de la función "cubo"
function cubo() {
    //Registro de variables
    //Se trae el número que el usuario ingresó en la página y se transforma en un valor decimal
    let num1 = parseFloat (document.getElementById("uno").value);
    //El valor de "result" incialmente será 1, esto facilita la multiplicación porque no altera el valor de "num1"
    let result = 1;
    //Uso del condicional if para asegurar el cumplimiento de que el número ingresado sea mayor o igual a 10
    if (num1 >= 10) {
        //Uso del ciclo for para multiplicar el valor de "num1" al cubo
        
        for (let i = 0; i < 3; i++) {
            //Se usa el acumulador *= para cambiar el valor de "result" cada que se multipliqué por "num1"
            //El número ingresado se multiplica por sí mismo tres veces (el valor de la iteración es 3)
            result *= num1;
            
        }
        //Se imprimen los resultados simplemente usando .textContent en el caso de ambas condiciones
        document.getElementById("resultado").textContent = "El resultado de "+(num1)+" elevado al cubo es: "+(result);

    } else {
        //Si el numero que se ingresó es menor que 10, se imprimirá este mensaje
        document.getElementById("resultado").textContent = "El número ingresado " + (num1) + " debe ser mayor o igual a 10, para elevar al cubo";

    }
}
//Se hace llamado de la función "cubo" al momento de que el usuario haga click en el boton "calcular", de esta forma se ejecutará todo el script
//Y mostrará el resultado en la etiqueta <div> con el nombre "resultado" en la página web
document.getElementById("boton"). addEventListener("click" ,cubo);