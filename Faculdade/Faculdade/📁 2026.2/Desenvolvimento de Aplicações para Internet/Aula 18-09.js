/*
let numero = 1;

caso fosse com if

if (numero === 1) {
	console.log('um')
} else if (numero === 2) {
	console.log('dois')
}
...

switch (numero) {
	case 1:
        console.log('um')
        break;

    case 2:
        console.log('dois')
        break;
    
    case 3:
        console.log('tres')
        break;

    case "iirrrrraaaaa":
        console.log("q papelao hein")
        break
    
    default:
        console.log('numero invalido')
        break;
}
*/

// ===== While =====
/*
let contador = 1
let acumulador = 0

while (contador <= 10) {
	acumulador = acumulador + contador 
	contador = contador + 1

	console.log(acumulador)
}
*/

/*
let nome = prompt("Advinha o nome ai")

while (nome != "guga") {
	nome = prompt("Digita dnv dodjo")
}

console.log("ahh miseravi")
*/

// ===== Ternário =====
let idade = 12

// variável = condição ?(pergunta) true : false 
let resposta = idade >= 18 ? "De maior" : "De menor"
console.log(resposta)

// ===== For =====
let nome = 'guga'
// Início; Fim; Salto
for(let i = 0; i <= 10; i++) {
	console.log(nome)
}

// ===== Do-While =====
let n = 0;
do {
	console.log(n)
	n++
} while (n <= 10);
