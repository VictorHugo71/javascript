let num = [5, 4, 3] //Criando uma variavel composta ou vetor
console.log(`Nosso vetor é o ${num}`)
num[3] = 9 // Inserindo um valor dentro do vetor na posição referenciada
num[4] = 7 // Inserindo um valor dentro do vetor na posição referenciada 
num.push(8) //Inserindo um valor na última posição do vetor
console.log(num)
num.sort() //Ordenando o vetor em ordem crescente

/*for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

console.log()
let pos = num.indexOf(3) //procurando a posição do número 3 dentro do vetor
if (pos == -1) {
    console.log("valor não encontrado")
} else {
    for(let pos in num) { //valor de "pos" reiniciado ao iniciar o "for". 
        console.log(`O número na posição ${pos} possui o valor ${num[pos]}`)
    }
    console.log(`O valor está na posição ${pos}`) //^^^^^ Comando executado após o termino do "for" acima 

}