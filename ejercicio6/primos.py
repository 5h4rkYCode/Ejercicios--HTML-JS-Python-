def es_primo(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def contar_primos(n):
    if n < 1:
        return "Por favor, ingresa un número válido mayor o igual a 1."
    
    count = sum(1 for i in range(1, n + 1) if es_primo(i))
    return f"Entre 1 y {n} hay {count} números primos."

if __name__ == "__main__":
    n = int(input("Ingresa un número: "))
    print(contar_primos(n))