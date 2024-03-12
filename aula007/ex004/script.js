function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) { //Verificando se há valor digitado no campo de entrada através do comprimento do digíto
        window.alert('Digite um valor válido')
    } else {
        let n = Number(num.value) //Conversão da variável "num" de String para Number(número)
        let c = 1
        tab.innerHTML = "" //Limpando os valores da "tabuada" antes de escrever a nova
        /*while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }*/
        for(let c = 1; c <= 10; c++) {//Iniciando o laço de repetição da tabuada até o máximo de 10
            let item = document.createElement('option') //Criando o elemento option no select do HTML 
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //Atribuindo o value ao option select
            tab.appendChild(item) //Atribuindo os valores da tabuada em cada option do select
        }
    }
}