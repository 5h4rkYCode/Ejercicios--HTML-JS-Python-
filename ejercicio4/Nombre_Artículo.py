print("En este sistema, se selecciona un articulo y se le asigna un descuento denominado clave.")
print("Analice la siguiente lista en donde se muestran los artículos y sus respectivos precios: \n"
      "1. Articulo # 1: Papas margarita $6500 \n"
      "2. Articulo # 2: Coca cola 3 litros $9500 \n"
      "3. Articulo # 3: Crema de peinar Savital $15000 \n"
      "4. Articulo # 4: Papel higienico suave x32 $32000 \n")

art_1 = 6500
art_2 = 9500
art_3 = 15000
art_4 = 32000

print("Analice la siguiente lista en donde se muestran las claves que corresponden a los artículos: \n"
      "1. Clave # 1: Corresponde a un descuento del 10% \n"
      "2. Clave # 2: Corresponde a un descuento del 20% \n")
clave_1= 0.10
clave_2= 0.20

while True:
    try:
        selectorn = int(input("Ingrese el número del producto (1-4): "))
        if selectorn == 1:
            prec_o = (art_1)
            print(f"Has seleccionado 'Papas margarita'. Precio: ${prec_o}")
            break
        
        elif selectorn == 2:
            prec_o = (art_2)
            print(f"Has seleccionado 'Coca cola 3 litros'. Precio: ${prec_o}")
            break
        elif selectorn == 3:
            prec_o = (art_3)
            print(f"Has seleccionado 'Crema de peinar Savital'. Precio: ${prec_o}")
            break
        elif selectorn == 4:
            prec_o = (art_4)
            print(f"Has seleccionado 'Papel higiénico suave x32'. Precio: ${prec_o}")
            break
        else:
            print("Error: El número ingresado no corresponde a ningún artículo.")
    except ValueError:
        print("Error: Debes ingresar un número válido en el rango de articulos.")
while True:
    try:
        selectorc = int(input("Ingrese el número de la clave (1-2): "))
        if selectorc == 1:
            print(f"Has seleccionado la clave 1. Descuento: 10%")
            descuento = clave_1
            break
        elif selectorc == 2:
            print(f"Has seleccionado la clave 2. Descuento: 20%")
            descuento = clave_2
            break
        else:
            print("Error: El número ingresado no corresponde a ninguna clave.")
            descuento = None
    except ValueError:
        print("Error: Debes ingresar un número válido en el rango de claves.")
        descuento = None

if 'prec_o' in locals() and 'descuento' in locals() and descuento is not None:
    descuento_aplicado = prec_o * descuento
    prec_d = prec_o - descuento_aplicado

    print(f"El precio original del producto es: ${prec_o}")
    print(f"El descuento aplicado es: ${descuento_aplicado}")
    print(f"El precio del producto con descuento es: ${prec_d}")
print("Gracias por usar nuestro sistema.")