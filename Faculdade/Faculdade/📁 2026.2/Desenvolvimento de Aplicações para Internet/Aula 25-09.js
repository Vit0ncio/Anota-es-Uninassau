// Exec 1
let n1 = 5

while (n1 <= 15) {
    if (n1 % 2 != 0) {
        console.log(n1)
    }

    n1++
}

console.log("---")

// Exec 2
let contador1 = 5
let n2 = 0

while (contador1 <= 15) {
    n2 += contador1
    contador1++
}

console.log(n2)

console.log("---")

// Exec 3
let n3 = 1
let contador2 = 1

while (contador2 <= 3) {
    n3 *= 8
    contador2++
    console.log(n3)
}

// Exec 4
let contador3 = 1
let contador_masc = 0, contador_fem = 0, contador_nd = 0, contador_media = 0, idade, contador_idade = 0, sexo

while (contador3 <= 8) {
    idade = Number(prompt("Digite sua idade: "))
    contador_idade++

    contador_media += idade

    sexo = prompt("Digite seu sexo (masc, fem, nd): ")

    if (sexo == "masc") {
        contador_masc++
    } else if (sexo == "fem") {
        contador_fem++
    } else if (sexo == "nd") {
        contador_nd++
    } else {
        console.log("tem nao")
    }

    contador3++
}

console.log(`Média das idades: ${contador_media / contador_idade}`)
console.log(`Quantidade de pessoas do sexo masculino: ${contador_masc}`)
console.log(`Quantidade de pessoas do sexo feminino: ${contador_fem}`)
console.log(`Quantidade de pessoas de sexo não declarado: ${contador_nd}`)
