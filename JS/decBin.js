function decBin(num){
    let reststak = [],
    rest, binString = ''

    while(num > 0){
        rest = Math.floor(num % 2)
        reststak.push(rest)
        num = Math.floor(num / 2)
    }

    while(reststak.length > 0){
        binString += reststak.pop().toString()
    }
    return binString
}

console.log(decBin(25))


