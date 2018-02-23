const Trie = require('../trie')
const trie = new Trie()

trie.put('pie', 5)
trie.put('pies', 12)
trie.put('pipe', 44)
trie.put('love', 50)
trie.put('piper', 100)

console.log(trie.get('pie'))
console.log(trie.get('pies'))

Trie.prettyPrint(trie.root, 0)

trie.delete('pies')

Trie.prettyPrint(trie.root, 0)

trie.delete('pie')

Trie.prettyPrint(trie.root, 0)

trie.delete('pipe')
trie.delete('piper')

Trie.prettyPrint(trie.root, 0)
