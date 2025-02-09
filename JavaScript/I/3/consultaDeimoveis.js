let menu = ""
let cont = []

//criar um menu interativo ( )

do{
    menu = prompt("Menu: " + "\nQuantidade de imoveis cadastrados: " + cont.length + "\n\n1- Novo Imovel.\n2- Imoveis cadastrados.\n3- Sair.")

    switch(menu){
        case "1":
            let propriedade = {
                proprietario : prompt("Informe o nme do proprietario do imovel: "),
                quarto : prompt("Informe a quantidade de quartos:"),
                banheiro : prompt("Informe a quantidade de banheiros:"),
                garagem : prompt("Possui garagem? ")
            }
            let puxar = cont.push({propriedade})
            
        break
        case "2":
            for (let i = 0; i < cont.length; i++) {
                alert(
                    "propriedade: " + (i+1) + 
                    "\n\nProprietario: " + cont[i].propriedade.proprietario +
                    "\nQuantidade de quartos: " + cont[i].propriedade.quarto +
                    "\nQuantidade de banheiros: " + cont[i].propriedade.banheiro + 
                    "\nPossui Garagem? " + cont[i].propriedade.garagem
                )
            }

        break
        case "3":

        break
        default:
            alert("error")
    }
}while(menu !== "3")

