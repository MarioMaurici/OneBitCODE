const dayjs = require("dayjs")
var customParseFormat = require("dayjs/plugin/customParseFormat")

dayjs.extend(customParseFormat)

//data de nascimento no formato brasileiro
const nascDat = dayjs("04/10/2004", "DD/MM/YYYY")

//data atual
const now = dayjs()

//idade
const yearsOld = now.diff(nascDat, 'year') 

//data do proximo aniversario
const proxAniversario = nascDat.add(yearsOld + 1, 'year')

//descobrindo quantos dias faltam para a proxima data de anivesario
const diasProxAni = proxAniversario.diff(now, 'days') + 1


console.log(`
    Data de Nascimento ${nascDat.format('DD/MM/YYYY')}
    Data Atual: ${now.format('DD/MM/YYYY') }
    Idade atual: ${yearsOld}
    Próximo Aniversário: ${proxAniversario.format('DD/MM/YYYY')}
    Dias para o Próximo aniversário: ${diasProxAni}

`);


