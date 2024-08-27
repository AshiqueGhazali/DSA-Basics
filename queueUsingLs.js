class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.top = null
        this.size = 0
    }

    enqueue (value){
        const newNode = new Node(value)
        if(!this.top){
            
            this.top = newNode
        }else{
            let curr = this.top

            while(curr.next){
                curr =curr.next
            }

            curr.next = newNode
        }

        this.size++
    }

    dequeue(){
        if(!this.top){
            return 'queue is empty'
        }
        
        const popped = this.top.value
        this.top = this.top.next
        this.size--
        return popped
    }

    peek(){
        return this.top.value
    }

    print(){
        if(!this.top){
            return 'queue is empty'
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

const queue = new Queue()

queue.enqueue(330)
queue.enqueue(90)
queue.enqueue(10)
queue.enqueue(25)

console.log(queue.dequeue());

queue.print()