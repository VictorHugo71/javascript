function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom Dia!!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#95bed7'
        msg.innerHTML += '<br> BOM DIA!!'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#8e5a65'
        msg.innerHTML += '<br> BOA TARDE!!'
    } else {
        //Boa Noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#191437'
        msg.innerHTML += '<br> BOA NOITE!!'
    }
}