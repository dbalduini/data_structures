const crypto = require('crypto')

class MerkleTree {
  constructor() {

  }
}

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
    this.createHash()
  }

  createHash() {
    const hash = crypto.createHash('sha1')
    hash.update(data)
    this.hash = hash.digest('hex')
  }

  isLeaf() {
    return this.left == null && this.right == null
  }
}

// data blocks
const l1 = new Node('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar i')
const l2 = new Node('Praesent sit amet quam ac nunc posuere sollicitudin id at sapien. Integer fringilla imperdiet scelerisque. Fusce blandit a enim in commodo. Ves')
const l3 = new Node('Donec nec mattis enim. Duis in diam lacus. Ut eleifend at sem nec euismod. Maecenas at iaculis turpis. Vestibulum et erat varius, porta tellus ut, molestie ligula. Proin tincidunt non ligula v')
const l4 = new Node('Praesent quis purus congue, posuere dolor et, tincidunt lacus. Suspendisse luctus posuere justo sed aliquet. Sed cursus libero elit, in mollis orci aliquam ut. In luctus ac est nec accumsan. Vestibulum augue ante, malesuada nec purus vel, laoreet suscipit est. Aliquam erat volutpat. Cras vitae accumsan nulla. Nullam sed ipsum elit. Pellentesque porttitor fringilla tortor, ac placerat erat luctus ac. Aliquam erat volutpat. Duis sed nisi ultrices, elementum nisl et, eleife')

let tree = new MerkleTree()

