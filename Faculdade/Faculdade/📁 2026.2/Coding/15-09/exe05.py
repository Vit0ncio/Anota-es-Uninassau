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
