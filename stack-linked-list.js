const LinkedList = require('./linked-list')

// LIFO
class Stack {
  constructor() {
    this.list = new LinkedList()
  }

  push(v) {
    this.list.push(v)
  }

  pop() {
    if (this.list.isEmpty()) {
      return null
    }
    
    let node = this.list.head
    this.list.head = node.next
    return node.data
  }

}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack.pop())
console.log(stack.pop())

console.log('remain')
stack.list.print()

