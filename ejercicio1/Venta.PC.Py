print ("Este sistema te dara el precio final de la compra de un PC y si este supera el 1M tendras un descuento de 10%")

# Entradas

nombre = input("Digite su nombre: ")
CC = input("Digete su C.C: ")
precio = float(input("Digite el precio del PC: "))

print ("A continuación se mostraran los modelos de PC disponibles")
print ("1. HP")
print ("2. Lenovo")
print ("3. Dell")
print ("4. Asus")
print ("5. Acer")
print ("6. MSI")
print ("7. Apple")
print ("8. Samsung")
modelo = input("Digite el modelo del PC: ").strip().upper()
# Proceso  
while modelo not in ["HP", "LENOVO", "DELL", "ASUS", "ACER", "MSI", "APPLE", "SAMSUNG"]:
    print ("Error, por favor digite un modelo valido (Nombre de la marca)")
    modelo = input("Digite el modelo del PC: ").strip().upper()
#usamos el while para evitar estupideces del usuario

print ("Especialidad del PC que te gustaria comprar")
print ("1. Gamer")
print ("2. Oficina")
print ("3. Hogar")
print ("4. Estudiante")
print ("5. Diseño")
print ("6. Programación")
print ("7. Todo en uno")
espescialidad = input("Digite la especialidad del PC: ").strip().upper()
# Proceso
while espescialidad not in ["GAMER", "OFICINA", "HOGAR" , "ESTUDIANTE", "DISEÑO", "PROGRAMACIÓN", "TODO EN UNO"]:
    print ("Error, por favor digite una especialidad valida")
    espescialidad = input("Digite la especialidad del PC: ").strip().upper()
  


# descuento si aplica

descuento = 0
if precio >= 1000000:
    descuento = precio * 0.10
else:
    print ("El precio del PC no aplica para un desceunto")

# se aplica el IVA
subtotal = precio - descuento
iva = subtotal * 0.19
precio_final = subtotal + iva

# mostramos resultados 
print ("--------------------------------------------")
print ("Nombre: ", nombre)
print ("C.C: ", CC)
print ("Modelo: ", modelo)
print ("Especialidad: ", espescialidad)
print ("Precio del PC: ", precio)
print ("Descuento: ", descuento)
print ("Subtotal: ", subtotal)
print ("IVA: ", iva)
print ("Precio final: ", precio_final)
print ("--------------------------------------------")

print ("Gracias por usar nuestro sistema")
print ("Comentarios en caso de: ")

if modelo == "APPLE":
    print ("Apple, Que penita")

if espescialidad == "GAMER":
    print ("Gamer, Que buen gusto :3")
    
if espescialidad == "PROGRAMACIÓN":
    print ("Elegiste programacion, Eres un crack :O")


