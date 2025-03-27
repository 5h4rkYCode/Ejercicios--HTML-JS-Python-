cantidad = int(input("Ingrese la cantidad de sueldos: "))

if cantidad <= 0:
    print("La cantidad de sueldos debe ser mayor que cero.")
else:
    
    sueldos = [0] * cantidad  
   
   
    for i in range(cantidad):
        sueldos[i] = float(input(f"Ingrese el sueldo {i + 1}: "))

  
    sueldo_maximo = max(sueldos)
    print(f"El sueldo máximo es: ${sueldo_maximo}")