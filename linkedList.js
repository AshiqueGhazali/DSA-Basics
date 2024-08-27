class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null,
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepent(data){
        const newNode = new Node(data)

        if(this.isEmpty()){
            this.head=newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }

        this.size++
    }

    append(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            let curr = this.head

        while(curr.next !==null){
            curr = curr.next
        }
        
        curr.next= newNode
        }
        
        this.size++
    }

    search(data){
        let curr = this.head
        
        while(curr){
            if (curr.data===data) {
                return true
            }
            curr= curr.next
        }

        return false
    }

    remove(node){
        // with this function remove all node is equal to node which passed as argument
        if(this.isEmpty()){
            return
        }

        let curr = this.head
        let prev =null

        while(curr){
            if(curr.data===node){
                prev.next = curr.next
            }

            prev = curr
            curr = curr.next
        }
    }

    removeDuplicates(){
        if(this.isEmpty()){
            return
        }
        let have = new Set()

        let curr = this.head
        let prev = null

        while(curr){
            if(have.has(curr.data)){
                prev.next = curr.next
            }else{  
                prev= curr
                have.add(curr.data)
            }
            curr=curr.next
        }
    }

    countDuplicates(){
        if(this.isEmpty()){
            return 
        }

        let count = {}
        let curr = this.head
        
        while(curr){
            if(count[curr.data]){
                count[curr.data]++
            }else{
                count[curr.data]=1
            }
            curr=curr.next
        }

        return count
    }

    findMiddle(){
        if(this.isEmpty()){
            return
        }

        let fast = this.head
        let slow = this.head

        while(fast &&fast.next !== null){
            fast = fast.next.next
            slow = slow.next
        }

        return slow.data
    }

    removeMiddle(){
        if(this.isEmpty()){
            return
        }

        let fast = this.head
        let slow = this.head
        let prev = null

        while(fast  && fast.next !== null){
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }

        if (prev !== null) {
            prev.next = slow.next;
        }
        
    }

    reverseList(){
        let prev = null
        let curr = this.head

        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        this.head = prev
    }


    print(){
        let curr = this.head

        while(curr){
            console.log(curr.data);
            curr= curr.next
        }
    }
}

const ls = new linkedList()
ls.append(10)
ls.append(40)
ls.append(68)
ls.append(40)
ls.append(600)
ls.append(68)
ls.append(40)
ls.append(10)
ls.prepent(99)

ls.print()
ls.reverseList()
ls.print()







