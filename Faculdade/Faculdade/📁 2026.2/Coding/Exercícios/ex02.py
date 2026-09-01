total_pares = int(input("Digite a quantidade total de pares: "))

caixas = total_pares / 12
sobra = total_pares % 12

print(f"Caixas completas necessárias: {caixas:.0f}")
print(f"Pares que ficarão de fora: {sobra}")
