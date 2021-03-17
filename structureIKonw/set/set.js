class Set {
  constructor() {
    this.items = {}
  }

  add(element) {
    if (this.has(element)) return false

    this.items[element] = element
    return true
  }

  delete(element) {
    if (!this.has(element)) return false

    delete this.items[element]
    return true
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  // 集合的交集
  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))

    return unionSet
  }

  // 集合的交集
  intersection(otherSet) {
    const intersectionSet = new Set()
    const value = this.values()
    const otherValue = otherSet.values()

    let biggerSet = value
    let smallSet = otherValue

    if (otherValue.length - value.length > 0) {
      biggerSet = otherValue
      smallSet = value
    }

    smallSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })

    return intersectionSet
  }

  // 差集
  difference(otherSet) {
    const differenceSet = new Set()
    
  }
}

const s1 = new Set()
s1.add(1)
s1.add(2)
s1.add(3)
s1.add(9)
s1.add(10)

const s2 = new Set()
s2.add(1)
s2.add(2)
s2.add(3)
s2.add(4)
s2.add(5)
s2.add(6)
s2.add(10)

console.log(s1.intersection(s2).values()); 

module.exports = {
  Set
}


