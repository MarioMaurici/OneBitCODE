const medias = (...numbers) => {
    let soma = numbers.reduce((acc,number) => acc + number )
    return soma / numbers.length
}