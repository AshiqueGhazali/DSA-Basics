class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.size++
    }

    append(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail= newNode
        }

        this.size++
    }

    print(){
        let curr = this.head

        while(curr){
            console.log(curr.data);
            curr= curr.next
        }
    }
}