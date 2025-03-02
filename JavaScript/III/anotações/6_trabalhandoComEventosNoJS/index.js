// addEventListener ficara esperando o evento ser ativado
function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value


    if (password === passwordConfirmation){
        alert(username + 'Cadastrado')
    } else {
        alert('As senhas não conferem!')
    }
}
//ev = evento que foi dispirado, ele sempre fica disponivel qunado a gente trabalha com addEventListener;

const button = document.getElementById('register-button')

button.addEventListener('click', register)


//removendo o evento

function removeEvent() {
    button.removeEventListener('click', register)
    alert('Event removed')
}


button.addEventListener('mouseover', function(ev){
    console.log(ev.currentTarget)
})


// é possivel add mais de um evento por botão


