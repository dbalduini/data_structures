// Find all subsets of a set
// 2**n subsets
// n = 3 -> 8
// n = 4 -> 16
// n = 5 -> 32
function powerSet (a) {
  let n = a.length
  let psLen = Math.pow(2, n)
  let ps = new Array(psLen)

  for (let i = 0; i < psLen; i++) {
    let subset = []
    for (let j = 0; j < n; j++) {
      if (i & (1<<j)) {
        subset.push(a[j])
      }
    }
    ps[i] = subset
  }

  return ps
}

module.exports = powerSet
