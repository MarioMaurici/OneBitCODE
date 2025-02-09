/*
Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistemaListar vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever um candidato em uma vagaExcluir uma vagaSair

Listar vagas disponíveis

Criar um nova vaga

Visualizar uma vaga

Inscrever um candidato em uma vaga

Excluir uma vaga

Sair



A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.

A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.

A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
*/


let menu = ''
let vagas = []

do{
    menu = prompt("Bem vindo ao Busca empregos!!\n\n Selecione uma opção\n 1- Vagas Disponiveis\n 2- Criar uma nova Vaga \n3- Visualizar vaga\n4- Inscrever-se em uma vaga\n5- Excluir uma vaga\n6- Sair")

    switch(menu){
        case "1":
            if(vagas.length > 0) {
                for(let i = 0; i < vagas.length; i++){
                    alert(`vaga: ${i+1}\nNome da vaga: ${vagas[i].vaga.nome}\nQuantidade de candidatos ${vagas[i].vaga.candidato.length}`)
                }
            }else{
                alert('Nenhuma vaga encontrado!!')
            }            
        break
        case "2":
            let vaga = {
                nome: prompt('Informe nome da vaga'),
                descricao: prompt('Informe uma descrição sobre a vaga'),
                dataLimite: prompt('Até quando a vaga ficará disponivel?(DD/MM/YY)'),
                candidato:{}
            }

            let confirmacao = confirm('vaga: ' + vaga.nome + '\ndescrição: ' + vaga.descricao + '\nData limite: '+ vaga.dataLimite);

            if(confirmacao){
                const aux = {vaga}
                let cadastrar = vagas.push(aux)
                alert('Cadastrado!!')
            }
            
        break
        case "3":
        break
        case "3":
        break
        case "4":
        break
        case "5":
        break
        case "6":
        break
        default:
    }
}while(menu !== "6");