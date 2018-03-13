const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const ordA = 97
const charCode = (word, i) => word.charCodeAt(i) - ordA

// Trie is a key-value data structure
class Trie {
    constructor() {
      this.root = new Node('')
    }

    put(word, value) {
      let currentNode = this.root;

      for (let i = 0; i < word.length; i++) {
        let c = charCode(word, i)
        if (currentNode.nodes[c] === undefined) {
          currentNode.nodes[c] = new Node(word[i])
        }
        currentNode = currentNode.nodes[c]
      }

      currentNode.value = value
    }

    get(word) {
      function _get(currentNode, i) {
        if (!currentNode) {
          return null
        }

        if (i === word.length) {
          return currentNode.value
        }

        let c = charCode(word, i)
        return _get(currentNode.nodes[c], i + 1)
      }

      return _get(this.root, 0)
    }

    delete(word) {
      function _delete (currentNode, depth) {
        // reached the end of the word
        if (word.length === depth) {
          currentNode.value = null
          return currentNode.hasNoChildren()
        }

        let c = charCode(word, depth)
        let nextNode = currentNode.nodes[c]

        if (!nextNode) {
          return false
        }

        // bubble up the node removal if the next node was deleted
        if (_delete(nextNode, depth + 1)) {
          // erase the next node reference since it was deleted
          currentNode.nodes[c] = null
          // the current node can only be deleted if its value is null
          if (currentNode.value === null) {
            return currentNode.hasNoChildren();
          }
        }

        return false
      }

      _delete(this.root, 0)
    }
}


class Node {
  constructor(ch) {
    this.ch = ch
    this.value = null
    this.nodes = new Array(alphabet.length)
  }

  hasNoChildren() {
    return this.nodes.every(n => n == null)
  }
}

Trie.prettyPrint = function (currentNode, depth) {
  if (currentNode === null) {
    return
  }

  let str = '-'.repeat(depth)
  str += currentNode.ch
  if (currentNode.value !== null) {
    str += ' ' + currentNode.value
  }
  console.log(str)
  
  const children = currentNode.nodes.filter(a => a != null)

  children.forEach(node => {
    Trie.prettyPrint(node, depth+1)
  })
}

module.exports = Trie
