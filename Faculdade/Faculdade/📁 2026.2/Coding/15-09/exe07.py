lado1 = int(input("Digite o primeiro lado do triângulo: "))
lado2 = int(input("Digite o segundo lado do triângulo: "))
lado3 = int(input("Digite o terceiro lado do triângulo: "))

t_valido = lado1 + lado2 > lado3 or lado3 + lado1 > lado2 or lado2 + lado3 > lado1

if t_valido:
    if (lado1 == lado2 and lado2 == lado3):
        print("Equilatero")
    elif (lado1 == lado2 or lado2 == lado3 or lado1 == lado3):
        print("Isósceles")
    else:
        print("Escaleno")
else:
    print("burro faz direito")
