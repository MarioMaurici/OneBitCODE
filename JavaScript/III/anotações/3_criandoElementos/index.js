function addInput() {
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'novo input: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    //add dentro do ul

    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}


document.getElementById


// ineerHtml = permite add tags direto no js usando scripts obs: é uma propriedade perigosa, permite que o codigo html seja executado abrindo brechas de segurança na sua aplicação
// innerText = so aceita texto