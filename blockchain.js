const crypto = require('crypto')

// A very tiny and simplified Blockchain implementation
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 4
  }

  createGenesisBlock() {
    return new Block(0, Date.now(), 'Genesis Block', '0')
  }

  getLastestBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(block) {
    block.prevHash = this.getLastestBlock().hash
    block.mine(this.difficulty)
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
    this.nounce = 0
    this.updateHash()
  }

  calcHash() {
    const SHA1 = crypto.createHash('sha1')
    SHA1.update(
      this.index + 
      this.timestamp + 
      JSON.stringify(this.data) + 
      this.prevHash + 
      this.nounce)
    return SHA1.digest('hex')
  }

  updateHash() {
    this.hash = this.calcHash()
  }

  // Proof-of-Work
  mine(difficulty) {
    const t = '0'.repeat(difficulty)
    // Require the hash to start with zeros times difficulty
    while(this.hash.substr(0, difficulty) !== t) {
      this.nounce++
      this.updateHash()
    }
    console.log('Block mined:', this.hash)
  }
}

module.exports = {
  Blockchain,
  Block
}
