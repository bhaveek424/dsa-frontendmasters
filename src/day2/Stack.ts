type Node<T> = {
    value: T,
    prev?: Node<T>, // it helps in visualisation of a stack as its pointing backwards
}
export default class Stack<T> {
    public length: number;
    private head?: Node<T>

    

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        const node = {value: item} as Node<T>

        this.length++
        if (!this.head) {  // when there's no head
            this.head = node
            return;
        }
        // if there's a head
        node.prev = this.head //  node is pointing to head F -> E (if we want to push F)
        this.head = node; // head is poitint to node

}
    pop(): T | undefined {
        // we cant simply decrement our length(bookkeeping) cuz we are going to -1 territory
        this.length = Math.max(0, this.length -1) //this ensures we stay at 0 or we countdown
        if(this.length === 0) {
            const head = this.head 
            this.head = undefined
            return head?.value
        }
        // to detatch 
        const head = this.head as Node<T> // We save out the value that points to F
        this.head = head.prev

        return head.value

}
    peek(): T | undefined {
        return this.head?.value

}
}