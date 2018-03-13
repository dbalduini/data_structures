const assert = require('assert')
const powerSet = require('../power-set')

let a = powerSet([1, 2, 3])
assert.equal(a.length, 8)
assert.deepEqual(a, [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]])

let b = powerSet(['a', 'b'])
assert.equal(b.length, 4)
assert.deepEqual(b, [[],['a'],['b'],['a','b']])

/*
 * Set {x,y,z}
 * 1 means include the element
 * So 101 means include x and z
 *
 * sFor the whole power set of S we get:
 * {} = 000 (Binary) = 0 (Decimal)
 * {x} = 100 = 4
 * {y} = 010 = 2
 * {z} = 001 = 1
 * {x, y} = 110 = 6
 * {x, z} = 101 = 5
 * {y, z} = 011 = 3
 * {x, y, z} = 111 = 7
*/

// Debug
// &     => bitwise AND operation
// False => 000
// True  => !False

// 0 = 000
// 1 = 001
// 2 = 010
// 3 = 011

// Subset [ ]
// i=0, j=0
// 1<<0 = 001 = 1
// 000 & 001 = 000

// Subset [ 2 ]
// i=2, j=1
// 1<<1 = 010 = 2
// 010 & 010 = 010

// Subset [1, 2]
// i=3, j=0
// 1<<0 = 001 = 1
// 011 & 001 = 001

// i=3, j=1
// 1<<1 = 010 = 2
// 011 & 010 = 010

// Subset [1, 2, 3]
// i=7 = 111 (4+2+1)

// j=0, 1<<0 = 001
// 111 & 001 = 001

// j=1, 1<<1 = 010
// 111 & 010 = 010

// j=2, 1<<2 = 100
// 111 & 100 = 100
