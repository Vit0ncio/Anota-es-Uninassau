#altura = float(input("Digite a sua altura: "))
#print(f"A sua altura é: {altura}")
#nome = input("Digite o nome do aluno: ")
#idade = int(input("Digite a idade do aluno: "))

#n1 = float(input("Digite a primeira nota: "))
#n2 = float(input("Digite a segunda nota: "))

#media = (n1+n2)/2


#print("Aluno:{nome} idade {idade}")
#print("A Média anual foi: ", media)

#if media >= 7:
 #   print("O aluno passou!")
#else:
 #   print("O aluno foi reprovado!")

# Questão 1
#velocidade_carro = int(input("Qual a velocidade do carro: "))
#if velocidade_carro > 80 :
 #   print("Você foi multado")
  #  multa = (velocidade_carro - 80)*5
   # print("multa:", multa )

# Questão 2
#a = int(input("Digite um número: "))
#b = int(input("Digite outro número: "))
#a_maior = a > b
#if a_maior == True :
 #   print("A é maior")
#else :
 #   print("B é maior")
 
# Questão 3
#distancia = float(input("Digite a distância: "))
#if distancia <= 200 :
 #   passagem = distancia * 0.5
  #  print("O preço da passagem será: ", passagem)
#else :
 #   passagem = distancia * 0.4
  #  print("O preço da passagem será: ", passagem)


# Questão 4
#idade = int(input("Digite sua idade: "))
#estudante = input("Você é estudante? (s/n)")
#hora_de_pico = input("Está em horário de pico? (s/n)")
#if idade < 6 or idade > 65 or (estudante == "s" and hora_de_pico == "n"):
 #   tarifa = 100 - (100*(50/100))
  #  print("A sua tarifa custa", tarifa)
#else :
 #   print("A sua tarifa custa 100")

# Questão 5
nome = input("Digite seu nome: ")
idade = int(input("Digite sua idade: "))

print(f"\nParticipante: {nome} | Idade: {idade} anos")

if idade >= 16:
    saldo = float(input("Digite o saldo: "))

    if saldo > 50:
        if idade >= 18:
            print("Entrada liberada: Maior de 18 anos.")
        else:
            autorizacao = input("Possui carta de autorização dos pais? (s/n): ")

            if autorizacao == "s":
                print("Entrada liberada: Menor autorizado pelos pais.")
            else:
                print("Entrada negada: Menor entre 16 e 17 anos sem autorização por escrito")
    else:
        print("Entrada negada: Saldo insuficiente.")
else:
    print("Entrada negada: Menor de 16 anos não pode entrar no evento.")
