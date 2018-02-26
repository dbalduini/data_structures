const assert = require('assert')
const Tree = require('../bst')

let tree = new Tree(4)
tree.insert(6)
tree.insert(8)
tree.insert(10)
tree.insert(18)
tree.insert(15)
tree.insert(21)

let nodes = Tree.sortItems(tree)
assert.deepEqual(nodes, [4, 6, 8, 10, 15, 18, 21])

assert.equal(tree.root.val, 4)
assert.equal(tree.root.right.right.val, 8)
assert.equal(tree.root.right.right.right.val, 10)
assert.equal(tree.root.right.right.right.right.val, 18)

let bt = Tree.balance(tree)

assert.equal(bt.root.val, 10)
assert.equal(bt.root.left.val, 6)
assert.equal(bt.root.left.left.val, 4)
assert.equal(bt.root.left.right.val, 8)
assert.equal(bt.root.right.val, 18)
assert.equal(bt.root.right.left.val, 15)
assert.equal(bt.root.right.right.val, 21)

assert.ok(bt.contains(18))
assert.ok(bt.contains(10))
assert.ok(!bt.contains(1))
