const crypto = require('crypto')

// A very tiny and simplified Blockchain implementation
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
  }

  createGenesisBlock() {
    return new Block(0, Date.now(), 'Genesis Block', '0')
  }

  getLastestBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(block) {
    block.prevHash = this.getLastestBlock().hash
    block.updateHash()
    this.chain.push(block)
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      let block = this.chain[i]
      let prevBlock = this.chain[i-1]

      if (block.hash !== block.calcHash()) {
        return false
      }

      if (block.prevHash !== prevBlock.hash) {
        return false
      }
    }

    return true
  }
}

class Block {
  constructor(i, t, d, p) {
    this.index = i
    this.timestamp = t
    this.data = d
    this.prevHash = p
    this.updateHash()
  }

  calcHash() {
    const SHA1 = crypto.createHash('sha1')
    const json = JSON.stringify(this.data)
    SHA1.update(this.index + this.timestamp + json + this.prevHash)
    return SHA1.digest('hex')
  }

  updateHash() {
    this.hash = this.calcHash()
  }
}

module.exports = {
  Blockchain,
  Block
}
