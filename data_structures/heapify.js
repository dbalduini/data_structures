// Fast way of finding the highest 3 items in an array with a MinHeap

function heapify (xs) {
  let min = 0 // start at root index 0
  let l = 1   // left child
  let r = 2   // right child
  // find the min value index
  if (xs[l] < xs[min]) { min = l }
  if (xs[r] < xs[min]) { min = r }
  swap(xs, 0, min)
}

// ES6 compatible swap
function swap (xs, i, j) {
  [ xs[i], xs[j] ] = [ xs[j], xs[i] ]
}

let conjunto = [8, 3, 4, 1, 9, 6, 2, 3, 7, 5]

// Init a MinHeap with the first 3 items
let heap = conjunto.slice(0, 3)

heapify(heap)

for (let i of conjunto.slice(3)) {
  if (i > heap[0]) {
    heap[0] = i
    heapify(heap)
  }
}

// Print the 3 highest values
console.log(heap)
