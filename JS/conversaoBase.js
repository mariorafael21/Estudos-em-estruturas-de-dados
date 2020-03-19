function conveter(num, base){
    let restStack = [],
    resto,
    baseString = '',
    digitos = '0123456789ABCDEF' 

    while(num > 0){// 123
        resto = Math.floor(num % base)
        restStack.push(resto)//[11, 7]
        num = Math.floor(num / base)
    }

    while(restStack.length > 0){ // 7 , 11 digito 7 e 11 = 7B
        baseString += digitos[restStack.pop()]// aqui recebe o digito da posição que trouxe do primeiro while
    }
    return baseString
}

console.log(conveter(123, 2))


//conversor para qualquer base