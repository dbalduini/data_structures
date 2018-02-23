const assert = require('assert')
const Stack = require('../stack')
const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

assert.equal(5, stack.pop())
assert.equal(4, stack.pop())
assert.equal(3, stack.peek())
assert.deepEqual([1, 2, 3], stack.array)
