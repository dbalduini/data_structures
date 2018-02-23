// MaxHeap implementation
class Heap {
  constructor(arr) {
    this.arr = arr
    this.size = arr.length
    this.heapify()
  }

  heapify() {
    let i = Math.floor( (this.size / 2) - 1 )
    while (i >= 0) {
      this.bubbleDown(i)
      i--
    }
  }

  /**
  * Bubble the item down until it is bigger then its children
  */
  bubbleDown(i) {
    let max = this.maxArgIndex(i)
    if (max !== i) {
      this.swap(i, max)
      this.bubbleDown(max)
    }
  }

  maxArgIndex(i) {
    let max = i
    if (this.arr[i] < this.leftChild(i)) {
      max = this.leftChildIndex(i)
    }
    if (this.arr[max] < this.rightChild(i)) {
      max = this.rightChildIndex(i)
    }
    return max
  }

  parentIndex(i) {
    return Math.floor( (i - 1) / 2 )
  }

  leftChildIndex(i) {
    return i * 2 + 1
  }

  rightChildIndex(i) {
    return i * 2 + 2
  }

  parent(i) {
    return this.arr[this.parentIndex(i)]
  }

  leftChild(i) {
    return this.arr[this.leftChildIndex(i)]
  }

  rightChild(i) {
    return this.arr[this.rightChildIndex(i)]
  }

  get(i) {
    return this.arr[i]
  }

  hasParent(i) {
    return this.parentIndex(i) >= 0
  }

  swap(i, j) {
    [ this.arr[i], this.arr[j] ] = [ this.arr[j], this.arr[i] ]
  }

  peek() {
    return this.arr[0]
  }

  /**
  * Replace the value at index i by v
  * @param i - The index
  * @param newItem - The new item value
  */
  replace(i, newItem) {
    let oldItem = this.get(i)
    this.arr[i] = newItem
    if (newItem < oldItem) {
      this.bubbleDown(i)
    } else if (newItem > oldItem) {
      this.bubbleUp(i)
    }
  }

  /**
  * Bubble the item up until it is lower then the parent
  */
  bubbleUp(index) {
    let i = index
    while (this.hasParent(i)) {
      let p = this.parentIndex(i)

      if (this.parent(i) < this.get(i)) {
        this.swap(p, i)
        i = p
      }
    }
  }

  sort() {
    // TODO
  }

}

// Finding k smallest items in some array
Heap.findSmallestItems = function (arr, k) {
  let heap = new Heap(arr.slice(0, k))
  // Keep tracking of the smallest itens on the heap
  for (let i = k; i <= arr.length; i++) {
    if (arr[i] < heap.peek()) {
      heap.replace(0, arr[i])
    }
  }
  return heap.arr
}


module.exports = Heap
