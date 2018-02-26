const Tree = require('../bst')

function printJson (tree) {
  console.log(JSON.stringify(tree, null, 4))
}

// let tree = new Tree(26)

// tree.insert(19)
// tree.insert(33)
// tree.insert(12)
// tree.insert(24)
// tree.insert(31)
// tree.insert(40)

// tree.insert(21)

// printJson(tree)
// printInOrder(tree.root)

// console.log(tree.contains(24))
// console.log(tree.contains(0))

let tree = new Tree(4)
tree.insert(6)
tree.insert(8)
tree.insert(10)
tree.insert(18)
tree.insert(15)
tree.insert(21)

// printJson(tree)

tree = Tree.balance(tree)

// let items = Tree.sortItems(tree)
// console.log(items)

printJson(tree)
