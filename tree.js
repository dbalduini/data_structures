// https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html
// https://medium.com/basecs/leaf-it-up-to-binary-trees-11001aaf746d
// https://algs4.cs.princeton.edu/32bst/BST.java.html

// BinaryTree implementation
class Tree {
  constructor(v) {
    this.root = new Node(v, 0)
  }

  insert(v) {
    let n = new Node(v)
    this.root.insert(n)
  }

  search(key) {
    return this._search(this.root, key)
  }

  _search(node, key) {
    if (!node) {
      return null
    }
  
    if (node.val === key) {
      return node
    }
  
    if (key < node.val) {
      return this._search(node.left, key)
    }
  
    return this._search(node.right, key)
  }
  
  contains(key) {
    return this._search(this.root, key) !== null
  }
}

class Node {
  constructor(v) {
    this.val = v
    this.left = null
    this.right = null
  }

  isLeaf() {
    return this.left === null && this.right === null
  }
  
  insert(node) {
    if (this.val < node.val) {
      if (this.right === null) {
        this.right = node
      } else {
        this.right.insert(node)
      }
    } else {
      if (this.left === null) {
        this.left = node
      } else {
        this.left.insert(node)
      }
    }
  }
}

function printInOrder (node, asc) {
  if (node) {
    printInOrder(node.left)
    console.log(node.val)
    printInOrder(node.right)
  }
}

function printJson (tree) {
  console.log(JSON.stringify(tree, null, 4))
}

let tree = new Tree(26)

tree.insert(19)
tree.insert(33)
tree.insert(12)
tree.insert(24)
tree.insert(31)
tree.insert(40)

tree.insert(21)

printJson(tree)
printInOrder(tree.root)

console.log(tree.contains(24))
console.log(tree.contains(0))
