# Declarando as variáveis iniciais
salario = 1500
aumento = 10

# Printa o salário
print(salario)

# Calculamos o valor financeiro do aumento 
valor_do_aumento = salario * (aumento / 100)
# Calculamos o novo salário somando o aumento
novo_salario = salario + valor_do_aumento

# Mostramos os resultados na tela
print("O novo salário é:")
print(novo_salario)

# Operador relacional: O novo salário ficou maior q 600?
atingiu_meta = novo_salario > 1600

print("O salário ultrapassou a meta de 1600")
print(atingiu_meta)
