const form = document.getElementById('formNewDev')
const button = document.getElementById('newTech')
const addDev = document.getElementById('addDev')
let i = 1
let j = 1

function newTech(ev){
    ev.preventDefault()

    const newInput = document.createElement('input')
    const newLabel = document.createElement('label')
    const newBr = document.createElement('br')
    newInput.name = 'newTech'
    newInput.className = 'newTech'

    newLabel.innerText = 'Nova tecnologia'

    //radio
    const newRadio = document.createElement('input')
    const newRadioLabel = document.createElement('label')
    const radioBr = document.createElement('br')
    newRadio.type = 'radio'
    newRadio.name = 'main' + i
    newRadio.id = 'radio1' + i
    newRadio.value = '0-2 anos'
    newRadioLabel.innerText = '0-2 anos'
    newRadioLabel.htmlFor = 'radio1' + i

    const newRadio2 = document.createElement('input')
    const newRadioLabel2 = document.createElement('label')
    newRadio2.type = 'radio'
    newRadio2.name = 'main' + i
    newRadio2.id = 'radio2' + i
    newRadio2.value = '3-4 anos'
    newRadioLabel2.innerText = '3-4 anos'
    newRadioLabel2.htmlFor = 'radio2' + i

    const newRadio3 = document.createElement('input')
    const newRadioLabel3 = document.createElement('label')
    newRadio3.type = 'radio'
    newRadio3.name = 'main' + i
    newRadio3.id = 'radio3' + i
    newRadio3.value = '5+ anos'
    newRadioLabel3.innerText = '5+ anos'
    newRadioLabel3.htmlFor = 'radio3' + i


    //button delete
    const newButton = document.createElement('button')
    newButton.innerText = 'Deletar Tecnologia'
    newButton.addEventListener('click', function(ev){
        form.removeChild(newBr)
        form.removeChild(newInput)
        form.removeChild(newLabel)
        form.removeChild(newRadio)
        form.removeChild(newRadioLabel)
        form.removeChild(newRadio2)
        form.removeChild(newRadioLabel2)
        form.removeChild(newRadio3)
        form.removeChild(newRadioLabel3)
        form.removeChild(radioBr)
        form.removeChild(newButton)
    })


    form.append(newBr,newLabel, newInput,newRadio,newRadioLabel,newRadio2,newRadioLabel2,newRadio3,newRadioLabel3,newButton,radioBr)
    i++
}


function cadastrar(ev){
    ev.preventDefault()
    j = 1

    const name = document.querySelector('input[name="name"]').value
    let techs = ''
    let times = ''
    const newTech = document.querySelectorAll('.newTech').forEach( function(item){
        techs += item.value
        const radio = document.querySelectorAll('input[name="main' + j + '"]:checked').forEach( function(item){
            times += item.value
        })
        techs += ' ' + times + ' - '
        times = ''
        j++
    })
    console.log({
        name,
        techs
    })

}
button.addEventListener('click', newTech)
addDev.addEventListener('click', cadastrar)



