class Queue{
    constructor(){
        this.item = []
    }

    enqueue (value){
        this.item.push(value)
    }

    dequeue(){
        return this.item.shift()
    }

    peek(){
        return this.item[0]
    }

    print(){
        console.log(this.item);
        
    }
}

const queue = new Queue()

queue.enqueue(20)
queue.enqueue(90)
queue.enqueue(10)
queue.enqueue(25)


queue.print()