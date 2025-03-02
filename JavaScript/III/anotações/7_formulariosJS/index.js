//no html tenho toda a estrutura do formulario, normalmente na tag form a gente teria uma action, porém não temos ela ali pois isso sera feito por js

//não queremos que a pagina se atualize, pois perderemos todas as informações armazenadas no js

const form = document.getElementById('orderForm');


//usando addEventListener pra add um evento no formulario
//evento submit
form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value;
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach( function (item){
        salad += "\n - " + item.value
    })

    console.log({
        name,
        address,
        breadType,
        main,
        observations,
        salad
    })
})  

