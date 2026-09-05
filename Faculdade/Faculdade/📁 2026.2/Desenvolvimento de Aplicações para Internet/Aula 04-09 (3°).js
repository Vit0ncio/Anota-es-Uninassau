//console.log(10>8) True
//console.log(10<8) False
//console.log(10>=10) True Maior ou igual a
//console.log(10<=10) True Menor ou igual a
//console.log(10==10)True obs: São dois sinais de igual porque um sinal de igual sozinho significa atribuição
//console.log(10!=10) False
//console.log(10 == "10") True, não compara tipos, compara valor absoluto(Especialidade do JS)
//console.log(10!= "10") Mesma lógica de cima
//console.log(10 === "10") false, com três sinais de igual o JS compara também o tipo
//console.log(10 !== "10") true
//WOM -> WINDOW OBJECT MODEL
//Abre um popu de aviso
//alert('oi')
//DOM -> Document object model
//document.body.innerHTML = "Neymar"
//comando de conversão de string para number
//Number() '2'
//prompt() -> abre um pop-up e captura o que for digitado, SEMPRE GUARDA COMO UMA STRING
//let numero = Number(prompt('Digite o seu número'))
// sintaxe da análise condicional
// if -> se 

//faça um script que pergunta ao usuário sua idade e caso ele seja "de menor", deve ser informado ao usuário que ele é "de menor"

/*let idade = Number(prompt("Qual é a sua idade? "))
if(idade >=18) {
    document.body.innerHTML = "Você é de maior"
}
else if(idade> 0 && idade < 18) {
    document.body.innerHTML = "Você é de menor"
}
else{
    document.body.innerHTML = "Idade inválida"
}
*/

let numero =  Number(prompt("Digite um número : "))
if(numero <= 10) {
    document.body.innerHTML = "F1"
}
else if(numero > 10 && numero <=100) {
    document.body.innerHTML = "F2"

}
else{ 
    document.body.innerHTML = "F3"
}
