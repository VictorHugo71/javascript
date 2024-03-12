function contar() {
    let ini = document.getElementById('n1')
    let fim = document.getElementById('n2')
    let passo = document.getElementById('ipasso')
    let res = document.querySelector('div#res')

    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0) {
        window.alert("Preencha os dados requisitados corretamente e tente novamente")
        res.innerHTML = "Impossível Contar"
    } else {
        res.innerHTML = "Contando:"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) { //Contagem Crescente
                res.innerHTML += `${c}\u{1F449} `
            }
        } else { //Contagem Regressiva
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += `${c}\u{1F449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}
