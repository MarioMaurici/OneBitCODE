function register(element){
    const username = element.children.username.value // elemento pai puxando no elemento filho pelo seu id
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert(username + ' cadastrado')
    } else {
        alert('Senhas não conferem')
    }
}