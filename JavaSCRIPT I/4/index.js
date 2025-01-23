function triangulo(){
    let base = parseFloat(prompt("Informe a base do triangulo: "))
    let altura = parseFloat(prompt("Informe a altura do triângulo: "))
    return "A área do triângulo é de: "+ (base*altura/2)
};

function retangulo(){
    let base = parseFloat(prompt("Informe a base do retangulo: "))
    let altura = parseFloat(prompt("Informe a altura do retangulo: "))
    return "A área do triângulo é de: "+ (base*altura)
};

function quadrado(){
    let lado = parseFloat(prompt("Informe o lado do quadrado: "))
    return "A área do quadrado é de" + (lado*lado)
};

function trapezio(){
    let baseM = parseFloat(prompt("Informe a base Maior do trapezio: "))
    let baseN = parseFloat(prompt("Informe a base Menor do trapezio: "))
    let altura = parseFloat(prompt("Informe a altura do trapezio: "))
    return "A área do trapezio é de " + ((baseM+baseN)*altura/2)
};

function circulo(){
    let raio = parseFloat(prompt("Informe o raio do circulo: "))
    return "A área do circulo é de " + (3.14*raio*raio)
};


let menu = "";
let result = ""


do{
    menu = prompt("Calculadora Geomêtrica\nEscolha uma das formas de calculo a baixo"+
                  "\n1- Área Triângulo\n2- Área Retangulo\n3- Área Quadrado\n4- Área Trapezio\n5- Área Circulo\n6- Sair")
    
    switch(menu){
        case "1":
            result = triangulo()
            alert(result)
        break
        case "2":
            result = retangulo()
            alert(result)
        break
        case "3":
            result = quadrado()
            alert(result)
        break
        case "4":
            result = trapezio()
            alert(result)
        break
        case "5":
            result = circulo()
            alert(result)
        break
        case "6":
            alert('Saindo do programa')
        break
        default:
            alert(`Informação invalida`)
    }


}while(menu !== "6")