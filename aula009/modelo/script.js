let num = document.getElementById('txtnum')
let lista = document.getElementById('selec')
let res = document.querySelector('div#res')
let vetor = []

function inNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionaVetor(n) {
    if(inNum(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} inserido na lista`
        lista.appendChild(item)

    } else {
        alert("Valor inválido ou já inserido na Lista")
    }
    num.value = ''
    num.focus()
}


function verificar() {
    if(vetor.length == 0) {
        alert("Adicione valores antes de continuar!!")
    } else {
        let tot = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0

        for(let pos in vetor) {
            soma += vetor[pos]

            if (vetor[pos] > maior) {
                maior = vetor[pos]
            } else if(vetor[pos] < menor) {
                menor = vetor[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número é ${maior}.</p>`
        res.innerHTML += `<p>O menor número é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores digitado é de ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é de ${media}</p>`
    }
}