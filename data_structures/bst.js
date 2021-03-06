// https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html
// https://medium.com/basecs/leaf-it-up-to-binary-trees-11001aaf746d
// https://algs4.cs.princeton.edu/32bst/BST.java.html


/** 
 * Binary Search Tree implementation.
 * - Each node has up to 2 children.
 * - The left subtree of a node contains only nodes with keys less than 
 * the node's key.
 * - The right subtree of a node contains only nodes with keys greater than 
 * the node's key.
*/

class Node {
  constructor(v) {
    this.val = v
    this.left = null
    this.right = null
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

  // Returns a list of items sorted inOrder
  sortedItems() {
    let acc = []
    sort(this.root, acc)
    return acc
  }

  // Returns a new balanced Tree
  balanced() {
    // require the nodes to be sorted
    let nodes = this.sortedItems()
    let tree = new Tree()
    tree.root = balance(nodes)
    return tree;
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

function sort(node, acc) {
  if (node) {
    sort(node.left, acc)
    acc.push(node.val)
    sort(node.right, acc)
  }
}

function balance(nodes) {
  if (nodes.length === 0) {
    return null
  }

  let middle = Math.floor(nodes.length / 2);
  let left = nodes.slice(0, middle);
  let right = nodes.slice(middle + 1, nodes.length)

  let node = new Node(nodes[middle])
  node.left = balance(left)
  node.right = balance(right)

  return node
}

module.exports = Tree
