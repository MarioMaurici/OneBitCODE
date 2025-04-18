const boardRegions = document.querySelectorAll("#gameBoard span");
let vBoard = [];
let turnPlayer = "";

//atualizar o nome do jogador da vez
function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  document.getElementById("turnPlayer").innerText = playerInput.value;
}

function initializeGame() {
  // Inicializa as variáveis globais
  vBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  turnPlayer = "player1";
  // Ajusta o título da página (caso seja necessário)
  document.querySelector("h2").innerHTML =
    'Vez de: <span id="turnPlayer"></span>';
  updateTitle();
  // Limpa o tabuleiro (caso seja necessário) e adiciona os eventos de clique
  boardRegions.forEach(function (element) {
    element.classList.remove("win");
    element.innerText = "";
    element.classList.add("cursor-pointer");
    element.addEventListener("click", handleBoardClick);
  });
  document.getElementById("start").innerText = 'Recomeçar';
}

function disableRegion(element){
    element.classList.remove('cursor-pointer')
    element.removeEventListener('click', handleBoardClick)
}

function handleWin(regions){
    regions.forEach(function(region){
        document.querySelector('[data-region="'+ region +'"]').classList.add('win')
    })
    const playerName = document.getElementById(turnPlayer).value
    document.querySelector('h2').innerHTML = playerName + ' Venceu!'
}

function handleBoardClick(ev) {
  const span = ev.currentTarget
  const region = ev.currentTarget.dataset.region;
  const rowColumnPair = region.split("."); //cria uma string dentro de um array para cada . que tiver
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  if (turnPlayer === "player1") {
    ev.currentTarget.innerText = "X"
    vBoard[row][column] = 'X'
  } else {
    span.innerText = 'O'
    vBoard[row][column] = 'O'
  }
  console.clear()
  console.table(vBoard)
  const winRegions = getWinRegions()
  if (winRegions.length > 0) {
    handleWin(winRegions)
    console.log('venceu')
    boardRegions.forEach(function(element){
        element.classList.remove('cursor-pointer')
        element.removeEventListener('click', handleBoardClick)
    })
  } else if (vBoard.flat().includes('')) { //caso nosso vboard possua algum espaço vazio faça
    if(turnPlayer === 'player1'){
        turnPlayer = 'player2'
    } else {
        turnPlayer = 'player1'
    }
    updateTitle()
  } else {
    document.querySelector('h2').innerHTML = 'Empate!'
  }
}

function getWinRegions(){
    let winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
        winRegions.push("0.0", "0.1", "0.2")
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
        winRegions.push("1.0", "1.1", "1.2")
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
        winRegions.push("2.0", "2.1", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
        winRegions.push("0.0", "1.0", "2.0")
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
        winRegions.push("0.1", "1.1", "2.1")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
        winRegions.push("0.2", "1.2", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
        winRegions.push("0.0", "1.1", "2.2")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
        winRegions.push("0.2", "1.1", "2.0")
    return winRegions

}
document.getElementById("start").addEventListener("click", initializeGame);
