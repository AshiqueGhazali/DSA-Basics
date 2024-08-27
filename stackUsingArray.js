class Stack {
    constructor(){
        this.item = []
    }

    push(value){
        this.item.push(value)
    }

    pop(){
       return this.item.pop()
    }

    peek(){
        return this.item[this.item.length-1]
    }

    isEmpty(){
        return this.item.length === 0
    }

    print(){
        console.log(this.item);
        
    }
}

const ss = new Stack()

ss.push(30)
ss.push(10)
ss.push(20)
ss.push(40)
ss.pop()
ss.print()