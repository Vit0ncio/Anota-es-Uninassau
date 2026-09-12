// Exercício 1
let n1 = Number(prompt("Digite a nota da primeira prova: "))
let n2 = Number(prompt("Digite a nota da segunda prova: "))
let n3 = Number(prompt("Digite a nota da terceira prova: "))

let media = (n1 + n2 + n3) / 3

if (media >= 7) {
    console.log(`pabens pasou -> ${media.toFixed(1)}`)
} else {
    console.log(`iiiihhhhhhh, nota dó -> ${media.toFixed(1)}`)
}

// Exercício 2
let codigo = prompt("Digite o código do produto: ")
let qtd = Number(prompt("Digite a quantidade: "))

if (codigo == "1") {
    console.log(`Valor total: ${qtd * 5.3}`)
} else if (codigo == "2") {
    console.log(`Valor total: ${qtd * 6}`)
} else if (codigo == "3") {
    console.log(`Valor total: ${qtd * 3.2}`)
} else if (codigo == "4") {
    console.log(`Valor total: ${qtd * 2.5}`)
} else {
    console.log("Código inválido")
}

// Exercício 3
let peso = Number(prompt("Digite seu peso: (em kg)"));
let altura = Number(prompt("Digite sua altura (em m):"));
let imc = peso / (altura ** 2);

if (imc > 25) {
    console.log("obeso");
}
