type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void { // we're gonna go to the tail this time
   const node =  {value: item} as Node<T>
        this.length++;
        if(!this.tail) {
            this.tail = this.head = node
        }

        this.tail.next = node
        this.tail = node


}
    deque(): T | undefined { // first we'll check if we have a head 
        if(!this.head) {
            return undefined
        }

        this.length-- //book-keeping

        const head = this.head // save the head
        this.head = this.head.next // update the head

        //free
        head.next = undefined

        return head.value // return the value
}
    peek(): T | undefined { // its the first value
        return this.head?.value
}
}