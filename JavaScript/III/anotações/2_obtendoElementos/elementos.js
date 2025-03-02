function show(){
    const conctactList = document.getElementById('contact-list') //consegue selecionar um elemento da pagina apartir do seu id
    console.log(conctactList)//Retorna HTMLCollection

    document.getElementById("contact2").placeholder = "Digite algo aqui...";



    //obter os elementos pelo nome da tag
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)//Retorna HTMLCollection

    //obter elementos pelo nome da classe
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs) //retorna HTMLCollection

    //obter elementos utilizando o name
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)//Retorna uma NodeList

    //obter elementos utilizando a mesma sintaxe de query usada no css
    const contact = document.querySelectorAll('.contact-list > li > label').placeholder = 'teste';
    console.log(contact)//Retorna uma NodeList

    //funciona da mesma forma que o queryselectall porem puxa um elemento
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)//Retorna uma NodeList
}
