const assert = require('assert')
const Queue = require('../queue')
const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

assert.equal(1, queue.dequeue())
assert.equal(2, queue.dequeue())
assert.equal(3, queue.peek())
assert.deepEqual([3, 4, 5], queue.array)
