class LinkedList {
  constructor() {
    this.head = null
  }

  push(v) {
    let node = new Node(v)
    node.next = this.head
    this.head = node
  }

  isEmpty() {
    return this.head === null
  }

  print() {
    let node = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

module.exports = LinkedList
