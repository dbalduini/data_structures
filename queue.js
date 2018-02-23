// FIFO
class Queue {
  constructor() {
    this.array = []
  }

  enqueue(v) {
    this.array.push(v)
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    return this.array.splice(0, 1)
  }

  isEmpty() {
    return this.array.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.array[0]
  }
}

module.exports = Queue
