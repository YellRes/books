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
        node.next = node
      } else {
        node.next = this.head.next
        this.head = node
      }
    } else if (index === this.count - 1) {
      let current = this.head
      while(index) {
        current = current.next
        index--
      }

      node.next = this.head
      current.next = node
    } else {
      let current = this.head
      w
    }
  }

  removeAt(index) {

  }
}

const circularLL = new CircularLinkedList()







