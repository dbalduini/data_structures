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
    return search(this.root, key)
  }
  
  contains(key) {
    return search(this.root, key) !== null
  }
}

function search(node, key) {
  if (!node) {
    return null
  }

  if (node.val === key) {
    return node
  }

  if (key < node.val) {
    return search(node.left, key)
  }

  return search(node.right, key)
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

Tree.printInOrder = function (node, asc) {
  if (node) {
    printInOrder(node.left)
    console.log(node.val)
    printInOrder(node.right)
  }
}

module.exports = Tree
