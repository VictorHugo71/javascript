let amigo = {
    nome: 'Gustavo',
    idade: 45,
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) {
        console.log("Engordou")
        this.peso += p      
    }
}

amigo.engordar(30)
console.log(`O amigo ${amigo.nome}, tem o peso de ${amigo.peso}kg`)