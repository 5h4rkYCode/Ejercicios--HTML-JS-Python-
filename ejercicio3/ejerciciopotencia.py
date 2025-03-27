numero = int(input("Ingrese un número: "))
resultado = 1

if numero >=10:
        for _ in range(3):
            resultado *= numero
        print(f"El resultado de {numero} elevado al cubo es: {resultado}")
else: 
        print("El número debe ser mayor o igual a 10")
