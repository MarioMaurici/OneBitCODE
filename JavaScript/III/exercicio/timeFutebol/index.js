function novoJogador(){
    const jogadorNome = document.getElementById('nome_jogador')
    const numeroCamisa = document.getElementById('numero_camisa')
    const posicao = document.getElementById('posicao')
    const ul = document.querySelector('ul')


    const newLi = document.createElement('li')
    newLi.innerText = numeroCamisa.value + ' - ' + jogadorNome.value + ' - '  + posicao.value
    newLi.id = numeroCamisa.value
    ul.appendChild(newLi)

    jogadorNome.value = ''
    posicao.value = ''
    numeroCamisa.value = ''


}

function excluirJogador(){
    const excluir = document.getElementById('delete').value
    const ul = document.querySelector('ul')
    const li = document.getElementById(excluir)

    ul.removeChild(li)

    excluir.value = ''
}