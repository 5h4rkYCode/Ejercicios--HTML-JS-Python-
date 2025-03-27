print ("Calcularemos tu edad, y te daremos un mensajito segun ella")
naci = int(input("En que año naciste? "))
actu = int(input("En que año estamos? "))
edad = actu - naci

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
    
print (f"tu edad es {edad} años")