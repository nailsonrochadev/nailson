export function getDate(){
    let data = new Date()
    let ano = data.getFullYear()
    let mes = data.getMonth()
    let dia = data.getDay()
    let idade = ano - 1993


    if (mes >= 4 && dia > 10) {
        return idade
    } else {
        idade--
    }

    return idade
}