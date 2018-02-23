// LIFO
class Stack {
  constructor() {
    this.array = []
  }

  push(v) {
    this.array.push(v)
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }
    return this.array.splice(-1)[0]
  }

  isEmpty() {
    return this.array.length === 0
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
console.log(stack.array)
