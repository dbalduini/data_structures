const crypto = require('crypto')

class Block {
  constructor(i, t, d, p) {
    this.index = i
    this.timestamp = t
    this.data = d
    this.parentHash = p
    this.hash = this.newHash()
  }

  newHash() {
    const hash = crypto.createHash('sha1')
    hash.update(this.index + this.timestamp + this.data + this.parentHash)
    return hash.digest('hex')
  }
}

let blockchain = []

let block0 = new Block(0, Date.now(), 'Genesis Block', '0')

blockchain.push(block0)

let block1 = new Block(1, Date.now(), 'Bloco 1', 0)
let block2 = new Block(2, Date.now(), 'Bloco 2', 1)
let block3 = new Block(3, Date.now(), 'Bloco 3', 2)

blockchain.push(block0)
blockchain.push(block1)
blockchain.push(block2)

console.log(blockchain)
