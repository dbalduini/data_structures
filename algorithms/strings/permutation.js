// Two strings are permutation when they have the same characters in
// different orders.

// Count chars implementation with hash table.
// Assuming case sensitive and whitespace is significant.
function permutation (a, b) {
  if (a.length !== b.length) {
    return false
  }

  let chars = {}

  for (let i = 0; i < a.length; i++) {
    let c = a.charCodeAt(i)
    if (chars[c]) {
      chars[c]++
    } else {
      chars[c] = 1
    }
  }

  for (let i = 0; i < b.length; i++) {
    let c = b.charCodeAt(i)
    if (!chars[c]) {
      return false
    }
    chars[c]--
    if (chars[c] < 0) {
      return false
    }
  }

  return true
}

module.exports = permutation
