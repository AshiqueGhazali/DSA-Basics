function revers(str){
    const stack = []

    for(let char of str){
        stack.push(char)
    }

    let reversed = ''

    while(stack.length > 0){
        reversed += stack.pop()
    }

    return reversed
}


console.log(revers('ashique'));
