class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value){
        const newNode = new Node(value)

        if(!this.top){
            this.top= newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }

        this.size++
    }

    pop(){
        if(!this.top){
            return 'stack is empty!'
        }

        const popNode = this.top.value
        this.top = this.top.next
        this.size--
        return popNode
    }

    peek(){
        return this.top.value
    }

    print(){
        if(!this.top){
            return 'stack is empty!'
        }

        let curr = this.top
        let result = []

        while(curr){
            result.push(curr.value)
            curr = curr.next
        }

        console.log(result)
    }
}


const stack = new Stack()

stack.push(10)
stack.push(40)
stack.push(79)
stack.push(33)

stack.pop()
stack.print()