// Session Storage
/*
    -- Forma simples de aramazenar dados no navegador durante a navegação

    -- Persistem mesmo após mudar de página em um mesmo site enquanto a aba/janela aberta

    --Existem somente enquanto a aba daquele site está aberta. Ao fechar o sessionStorage é limpo

    -- ele salva as informações permitindo que elas não se percam mesmo apos a gente
    mudar de pagina permitndo navegar entre paginas do site sem perder essas informações, um exemplo disso é o login

    --feito para ser facil de ser usado

    --armazena informações em texto,
*/
// Exemplo: 

//guardando um item dentro do sessionStorage
document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value
})

//lendo o item salvo
document.getElementById('readSesssion').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert('a informação salva é' + info)
})

//Local Storage
/* 
    -- Dados armazenados no navegador que pesistem mesmo após fechar a aba/janela do navegador

    -- Existem para "Sempre" até serem removidos, não possuem datas de expiração

    -- Casos de Uso: Pode usar o mesmo exemplo do login, imagina voce querer dar a opção do usuario ficar ou nao ativo mesmo apos fechar o navegador
    no caso do usuario querer que o login persista, você pode utilizar o Local Storage
*/
// Exemplo:
document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const t = localStorage.getItem('text')
    alert('a informacao salva é: ' + t)
})

//Cookies
/*
    -- Dados armazenados em pequenos arquivos de texto no computador do cliente(o usuario)

    -- Podem possuir uma data de expiração, após serem salvos. O diferenciado do Local Storage

    -- A forma mais tradicional de permitir "Lembrar" de informações mesmo depois de fechar o navegador, sendo a forma mais "comum" de lembrar informações

    -- São enviados nas requisições e podem existir no servidor, sendo devolvidos quando uma página html for solicitada

    --Requisições: Ação feita apos a troca de pagina

    --É possivel salva-las no back-end
*/
// Exemplo:
document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    //informações passadas para um cookie: cookieName = value; expiresUTCStringDate(data de expiração do cookie); path=/(caminho);
    const cookie = 'info=' + input.value + ';' // nome e valor do cookie
    const expiration = 'expires=' + new Date(2026,3,3) + ';' //em qual data esse cookie ficara disponivel?
    const path = 'path=/;' //em qual caminhos esse cookie ficara disponivel?
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2')
    //informações passadas para um cookie: cookieName = value; expiresUTCStringDate(data de expiração do cookie); path=/(caminho);
    const cookie = 'text=' + input.value + ';' // nome e valor do cookie
    const expiration = 'expires=' + new Date(2026,3,3) + ';' //em qual data esse cookie ficara disponivel?
    const path = 'path=/;' //em qual caminhos esse cookie ficara disponivel?
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})