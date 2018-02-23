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

function test () {
  let list = new LinkedList()

  list.push(1)
  list.push(2)
  list.push(3)
  list.push(4)
  list.push(50)
  list.push(27)

  print(list)
}

module.exports = LinkedList
