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

let vagas = []

function criarVaga(){
    let nome = prompt("Informe o nome da vaga")
    let descricao = prompt("Diga sobre a vaga")
    let datalimite = prompt("Data limite")

    let confirmacao = confirm("Confirme os seguinte dados:\n\nNome da vaga:" + nome + "\nDescrição: " + descricao + "\nData Limite: " + datalimite)
    if (confirmacao) {
        alert("Dados cadastrados!!")
        let novaVaga = {nome, descricao, datalimite, candidato: []}
        let cadastrar = vagas.push(novaVaga)
    }
}

function visualizarVaga(){
    let indice = parseFloat(prompt("Informe o Indice da vaga: "))
    let vaga = vagas[i]
    alert(
        "Vaga: " + vaga.nome +
        "Descrição: " + vaga.descricao +
        "Data Limite: " + vaga.datalimite +
        "Candidatos: " + vaga.candidato.length
    )
}