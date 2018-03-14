const assert = require('assert')
const permutation = require('../permutation')

assert.ok(permutation('god', 'dog'))
assert.strictEqual(permutation('god', 'Dog'), false)
assert.strictEqual(permutation('god  ', 'dog'), false)
