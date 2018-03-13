const assert = require('assert')
const blockchain = require('../blockchain')
const Blockchain = blockchain.Blockchain
const Block = blockchain.Block

let jsCoin = new Blockchain()

const block1 = new Block(1, Date.now(), { amount: 23 })
const block2 = new Block(2, Date.now(), { amount: 98 })
const block3 = new Block(3, Date.now(), { amount: 40 })

jsCoin.addBlock(block1)
jsCoin.addBlock(block2)
jsCoin.addBlock(block3)
assert.ok(jsCoin.isChainValid())

// console.log(JSON.stringify(jsCoin.chain, null, 4))

// Try to break the integrity by changing block1
jsCoin.chain[1].data = { amount : 9999 }
assert.strictEqual(jsCoin.isChainValid(), false)
jsCoin.chain[1].updateHash()
assert.strictEqual(jsCoin.isChainValid(), false)

// Try to break the integrity by removing block1
assert.strictEqual(jsCoin.isChainValid(), false)
