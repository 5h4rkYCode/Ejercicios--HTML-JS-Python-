print ("Calcularemos tu salario segun tus horas trabajadas")

horas = int(input("Cuantas horas trabajaste: "))

if horas <= 40:
    salario = horas * 10000
else:
    salario = 40 * 10000 + (horas - 40) * 15000
    
salario_mensual = salario * 4
    
print ("Tu salario a la semana es de: ", salario)
print ("El obrero trabajo ", horas, " horas")
print ("El obrero recibio por concepto de horas extras ", salario - (40 * 10000))
print ("El salario mensual (Si continua con la misma cantidad de horas) es de: ", salario_mensual)
