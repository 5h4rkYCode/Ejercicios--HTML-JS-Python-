function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function contarPrimos() {
    let n = parseInt(document.getElementById("numero").value);
    if (isNaN(n) || n < 1) {
        document.getElementById("resultado").innerText = "Por favor, ingresa un número válido mayor o igual a 1.";
        return;
    }
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (esPrimo(i)) count++;
    }
    document.getElementById("resultado").innerText = `Entre 1 y ${n} hay ${count} números primos.`;
}