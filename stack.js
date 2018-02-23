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

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.array[this.array.length - 1]
  }
}

module.exports = Stack
