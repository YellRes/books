const {Node, LinkList} = require('./linkList')


class CircularLinkedList extends LinkList {
  constructor() {
    super(...arguments)
  }

  insert(element, index) {
    if (!this.isEffectIndex()) return false
    const node = new Node(element)

    if (index === 0) {
      if (this.head === null) {
        this.head = node
        // add: 循环指向自身
        this.head.next = node
      } else {
        node.next = this.head
        this.head = node
        let lastNode = this.getElementAt(this.count)
        lastNode.next = this.head
      }
    } else  {
      let current = this.getElementAt(index)
      node.next = current.next
      current.next = node
    }

    this.count++
  }

  removeAt(index) {
    if (!this.isEffectIndex()) return false


    if (index === 0) {
      if (this.count === 1) {
        this.head = null
      } else {
        let last = this.getElementAt(this.count - 1)
        this.head = this.head.next
        last.next = this.head
      }
    } else {
      let current = this.getElementAt(index)
      current.next = current.next.next
    }

    this.count--
  }

}

const circularLL = new CircularLinkedList()

circularLL.insert(1, 0)
circularLL.insert(2, 0)
circularLL.insert(3, 0)


console.dir(circularLL, {depth: 10})

circularLL.removeAt(0)
console.dir(circularLL, {depth: 10})






