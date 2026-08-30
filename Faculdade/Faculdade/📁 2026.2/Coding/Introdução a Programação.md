## Algoritmos

É uma sequência de passos para atingir um objetivo específico, dando uma sequência de ordens para o computador realizar os passos.
Um exemplo prático seria uma receita de bolo ou qualquer receita no geral, uma séries de ingredientes e ações/passos que devem ser executados em ordem.

### Primeiro Algoritmo

"Como trocar uma lâmpada?"

Minha resposta:

1. Pegar uma escada
2. Pegar a lâmpada antiga
3. Subir a escada
4. Tirar a lâmpada antiga
5. Descer da escada
6. Pegar a lâmpada nova
7. Subir a escada
8. Colocar a lâmpada nova

Resposta do professor:

1. Acionar o interruptor
2. Se a lâmpada não funcionar, então:
	1. Pegar uma escada
	2. Posicionar a escada embaixo da lâmpada
	3. Buscar uma lâmpada nova
	4. Acionar o interruptor
	5. Subir na escada
	6. Retirar a lâmpada queimada
	7. Colocar a lâmpada nova
	8. Acionar o interruptor novamente
	9. Se a lâmpada nova não acender, então:
		1. Refazer a rotina do passo 2 novamente enquanto a lâmpada não funcionar

### Representação de Algoritmos

Existem diversas formas de representar um algoritmo. Entretanto, o essencial é que a representação seja bem estruturada e organizada. Até o momento, utilizamos o *texto corrido* (como no exemplo do primeiro algoritmo), e agora em diante, usaremos *fluxograma* e *pseudocódigo*.

#### Fluxograma

É um dos métodos mais utilizados para se representar um algoritmo, ela consiste em uma espécie de diagrama, um desenho que ajuda o leitor a visualizar o *fluxo* de um algoritmo, facilitando a compreensão para encontrar falhas ou problemas de eficiência. No fluxograma, são usados alguns símbolos (faltam imagens):

* **Início ou Fim**
* **Decisão**
* **Processo**
* **Processo Pré-definido**
* **Operação Manual**
* **Conector**
* **Documento**
* **Fluxo de Linha**

##### Exemplo de Algoritmo

"Como atravessar a rua?"

![[Fluxograma da Rua.canvas]]


"Faça um algoritmo que recebe dois números e verifica qual deles é o maior."

![[Fluxograma dos Números.canvas]]

Fluxograma da lâmpada
![[Fluxograma da Lâmpada.canvas]]

## Exercício

Criar um algoritmo para sacar uma determinada quantia de dinheiro de um caixa eletrônico de um banco.

* **Dicas**:
	* Comece escrevendo o problema textualmente, antes de preparar o diagrama;
	* Inclua a opção de verificar se há saldo suficiente

![[Exercício - Fluxograma do Caixa.canvas]]

#### Pseudocódigo

É uma descrição de um algoritmo usando linguagem cotidiana, se assemelhando a uma linguagem de programação simplificada. Graças ao pseudocódigo, não é necessário ter o conhecimento prévio de alguma linguagem de programação para entender o algoritmo. Na matéria, usaremos termos em português para a construção dos pseudocódigos.

##### Comandos

`programa` -> Marca o começo do algoritmo.
`leia` -> O programa "escuta" ou recebe uma informação.
`escreva` -> O programa "fala" ou mostra alho na tela.
`se` -> Toma uma decisão com base em uma situação.
`senão` -> O que fazer quando a situação anterior (do se), não acontecer.
`enquanto` -> Repete uma mesma ação até que a situação mude.

##### Exemplos

"Imagine um algoritmo que verifica a entrada em uma autoescola. Se a pessoa tiver 18 anos ou mais, o algoritmo imprime que ela pode entrar. Caso contrário, imprime q ela deve ficar do lado de fora."

```
programa {
	se (idade da pessoa e maior ou igual a 18) {
		escreva("pode entrar na autoescola")
	} senao {
		escreva("fica do lado de fora")
	}
}
```

"Imagine uma bomba de combustível. Enquanto o tanque estiver com menos de 10 litros, o algoritmo imprime para colocar mais gasolina. Quando passar de 10 litros, imprime que pode seguir viagem."

```
programa {
	enquanto (tanque do carro está com menos de 10 litros) {
		escreva("bota mais ai fi")
	}
	
	se (tanque tem 10 litros ou mais) {
		escreva("segue viagem")
	}
}
```

## Exercício

Crie um fluxograma e um pseudocódigo

**Termômetro**:

*Fluxograma*:


*Pseudocódigo*:

```
programa {
	se (termometro marcar mais que 37) {
		escreva("toma remédio pra febre")
	} senao {
		escreva("recebe alta médica")
	}
}
```

**Cofre digital**:

*Fluxograma*:

![[Fluxograma do Cofre Digital.canvas]]

*Pseudocódigo*:

```
programa {
	enquanto (tentativas for menor que 3) {
		escreva("Digite a senha: ")
	    leia(senha)
	    
		se (senha não for correta) {
			escreva("tente x⅚")
			tentativas mais 1
		} senao {
			escreva("senha correta")
			pare
		}
	}
	
	escreva("cofre bloqueado por segurança")
}
```