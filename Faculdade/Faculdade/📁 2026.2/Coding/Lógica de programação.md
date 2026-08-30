
## Noções de lógica

No cotidiano, a palavra "lógica" está relacionada a coerência e racionalidade. Uma das principais preocupações da lógica é validar ou não alguma opção disponível.
### Lógica no dia a dia

A lógica sempre nos acompanha no cotidiano, tanto na teoria, quanto na prática. Quando pensamos, falamos ou escrevemos, temos o cuidado de fazer a ação corretamente.
#### Exemplos

**Exemplo 1:**

- A gaveta está fechada 
- A caneta está dentro da gaveta
- Primeiro precisamos abrir a gaveta para pegar a caneta

**Exemplo 2:**

- Ciara é mais velha que Pedro
- Pedro é mais velho que Bruno
- Portanto, Clara é mais velha que Bruno

**Exemplo 3:**

- Todo mamífero é um animal
- Todo cavalo é um mamífero
- Portanto, todo cavalo é um animal

## Fundamentos do pensamento computacional

O pensamento humano é cheio de intuição e contexto, porém, o computador é estritamente correto. Portantozbonpensame

### A decomposição do problema 

Computadores não sabem resolver situações complexas de uma vez. A estratégia é quebrar um grande problema real em pequenas tarefas diretas e isoladas.

### A necessidade de critérios exatos

Como a máquina não tem bom senso, ela depende de 

## Condições ou expressões lógicas

**Condição** é uma afirmação direta que o sistema analisa como **Verdadeiro** ou **Falso**. Toda condição só possui um resultado final possível, para o computador, não existe "talvez" ou "depende", somente verdadeiro ou falso. Perguntas, ordens e opiniões subjetivas não funcionam como condições, já que o computador não tem como atribuir um valor booleano a elas.

### São expressões lógicas 

1. "O saldo atual da conta bancária é negativo." -> Condição
2. "Bloqueie o acesso do usuário imediatamente!" -> Ordem
3. "O número 15 é um número par." -> Condição
4. "O número x é realmente maior que 30." -> Aberta
5. "Um produto de R$ 100,00 com 40% de desconto é mais barato que um produto de R$ 50,00 sem desconto."-> Condição

Para validar as condições, a máquina precisa guardar valores em espaços com nomes exatos, chamados de **variáveis**.

## Variáveis

São "caixas" na memória do computador que dão nome e valor às coisas, substituindo termos vagos por dados reais. Uma condição só pode ser julgada como verdadeira ou falsa se a variável tiver um dado concreto.

### Representação de uma variável

**Exemplo 1:**

"O saldo atual da conta bancária é negativo."

No sistema, criamos uma variável chamada saldo_conta para *guardar* o dinheiro do cliente. A condição pra testar se é negativo:

- saldo_conta é menor que zero? (saldo_conta<0)

**Exemplo 2:**0

### Exercício

Considere que um programa executa as seguintes instruções rigorosamente em ordem:

- A variável X recebe o valor 4
- A variável Y recebe o valor 7
- A variável Z recebe o valor (X + Y)
- A variável X recebe o novo valor de (Z - 2)
- SE a variável X for maior que a variável Y, então Z recebe o valor de X. Caso contrário, Z recebe o valor de Y.

Ao final dessa execução, qual será o valor final guardado dentro da variável Z?

a) 7
b) 9 -> esse aq
c) 11
d) 13

## Operadores aritméticos

Como as variáveis sozinhas são dados estáticos aguardando instruções, e aí entra os operadores. Operadores são ferramentas que habilitam a capacidade de seguir instruções cuja função é executar uma função com os dados guardados nas variáveis. Na computação temos 3 tipos de operadores:

- Aritméticos
- Relacionais
- Lógicos

Elas usam os símbolos clássicos da matemática (+, -, /, mult), para manipular os dados numérico⁹s dentro das variáveis. O resultado de um cálculo aritmético é sempre um número e assim como a matemática tradicional, a ordem importa.
