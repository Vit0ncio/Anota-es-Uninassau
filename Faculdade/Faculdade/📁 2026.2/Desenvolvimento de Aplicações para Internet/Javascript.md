## Tipos de Dados

* **String**: Texto, um conjunto de caracteres. Em Javascript, tanto as aspas simples (''), aspas duplas ("") ou crase são válidas para texto. Exemplo: `Hello, World!`
* **Number**: Número, seja *float* ou *int*, em Javascript, os dois são unidos em um tipo só. Exemplo: `10`, `45.5`
* **Boolean**: Tem somente dois valores lógicos, *true* ou *false*.
* **Undefined**: Tipo indefinido, parecido com *null* em outras linguagens.
* **Function**: Função, um bloco de código encapsulado em uma função q pode ser utilizado em outras partes do programa.
* **Object**: Objeto, muito usado na **programação em POO**.

## Variável

Para criar uma variável, é obrigatório você declarar (Dizer que ela existe) e nomear (Dar um nome a ela) a variável. A sua inicialização, ou seja, a atribuição de valor a ela, é opcional.

### Criação das Variáveis

- Usando `var`:

```js
var ximbica; // undefined
var ximbica = "marlon"; // string
var ximbica = 45.5; // number
var ximbica = true; // boolean
var ximbica = {idade:47}; // object
var ximbica = ()=>(console.log("oi")); // function
```

* Usando `let`:

```js
let ximbica; // undefined
let ximbica = "marlon"; // string
let ximbica = 45.5; // number
let ximbica = true; // boolean
let ximbica = {idade:47}; // object
let ximbica = ()=>(console.log("oi")); // function
```

* Usando `const`:

```js
const ximbica; // ERRO
const ximbica = "marlon"; // string
const ximbica = 45.5; // number
const ximbica = true; // boolean
const ximbica = {idade:47}; // object
const ximbica = ()=>(console.log("oi")); // function
```

> * O `const` é a única declaração onde é **obrigatório** a inicialização da variável.
> * O `const` é a única declaração onde o valor da variável **não** muda.

### Manipulação de Variáveis 

```js
let nome = "marlon"

nome = "silva" // Não é obrigatório usar o let, var ou const caso precise mudar o valor
```

### Exemplos

```js
console.log(typeof ximbica); // Mostra o tipo da variável

console.log(ximbica) // Printa a variável
```

## Comentários

Serve como anotação, partes do código ilegíveis para a máquina mas legíveis para humanos. Pode ser usado pelos símbolos `//` para uma única linha, ou pelos símbolos `/**/` para múltiplas linhas.

```js
const pi = 3.14
pi = 10 // Exemplo de comentário em uma linha: ERRO AO MUDAR VALOR DE CONST, REMOVER

/* Comentário
em múltiplas
linhas */
```

## Operadores

### Aritméticos
* **Soma**: Simbolizado pelo `+`.
* **Subtração**: Simbolizado pelo `-`.
* **Divisão**: Simbolizado pelo `/`.
* **Multiplicação**: Simbolizado pelo `*`.
* **Resto de Divisão**: Simbolizado pelo `%`.
* **Exponenciação**: Simbolizado pelo `**`.

```js
3 + 2 // >>> 5
3 - 2 // >>> 1
3 / 2 // >>> 1.5
3 * 2 // >>> 6
3 % 2 // >>> 1
3 ** 2 // >>> 9
```

### Lógicos

Existem 3 operadores lógicos: *OU (OR)*, *E (AND)* e *NÃO (NOT)*.

* **OU (OR)**: Basta que uma das condições aconteça para que seja verdadeira. Exemplo: Se o professor faltar OU se chover muito, não terá aula. Em Javascript, é simbolizado pelo `||`.

* **E (AND)**: Só é verdadeiro se as duas condições forem verdadeiras. Exemplo: Se eu for maior de 18 anos E menor de 65 anos, eu sou adulto mas não idoso. Em Javascript, é simbolizado pelo `&&`.

- **NÃO (NOT):** Caso uma condição seja verdadeira, a situação é falsa e vice-versa. Em Javascript, é simbolizado pelo `!`.

```js
true || false;
true && false;
!true !false;
```
### Relacionais
fica pra próxima aulaa

