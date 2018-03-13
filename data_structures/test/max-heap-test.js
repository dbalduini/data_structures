const Heap = require('../max-heap')
const assert = require('assert')

var heap, expected;

heap = new Heap([3, 2, 10, 5, 4, 7])
expected = [10, 5, 7, 2, 4, 3]
assert.deepEqual(heap.arr, expected)

heap = new Heap([5, 12, 64, 1, 37, 90, 91, 97])
expected = [97, 37, 91, 12, 5, 90, 64, 1]
assert.deepEqual(heap.arr, expected)

// Replace the number 97 at index 0 by the number 4
heap = new Heap([97, 10, 20, 5, 9, 11, 13, 1])
heap.replace(0, 4)
expected = [20, 10, 13, 5, 9, 11, 4, 1]
assert.deepEqual(heap.arr, expected)

// Replace the number 5 at index 3 by the number 98
heap = new Heap([97, 10, 20, 5, 9, 11, 13, 1])
heap.replace(3, 98)
expected = [98, 97, 20, 10, 9, 11, 13, 1]
assert.deepEqual(heap.arr, expected)

let a = Heap.findSmallestItems([4, 1, 5, 2, 3, 0, 10], 3)
expected = [2, 1, 0]
assert.deepEqual(a, expected)

heap = new Heap([4, 1, 5, 2, 3, 0, 10])
heap.sort()
expected = [0, 1, 2, 3, 4, 5, 10]
assert.deepEqual(heap.arr, expected)
