class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {

  constructor() {
    this.count = 0;
    this.head = null
    this.tail = null
  }

  push(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      let current = this.head
      // 找到最后一个节点
      while(current.next) {
        current = current.next
      }
      node.prev = current
      current.next = node
      this.tail = node
    }

    return ++this.count
  }

  insert(element, index) {
    const node = new Node(element)

    if (index < 0 || index >= this.count) return

    let current = this.head
    let prev = null

    if (index === 0) {
      if (this.head == null) {
        this.head = node
        this.tail = node
      } else {
        current.prev = node
        node.next = current
        this.head = node
      }
    } else { 
      let targetNode = this.getElementAt(index)
      if (targetNode.next === null) {
        // 尾部插入
        node.next = null
        node.prev = targetNode
        targetNode.next = node
        this.tail = node
      } else {
        node.next = targetNode.next
        node.prev = targetNode

        targetNode.next.prev = node
        targetNode.next = node
      }
    }

    this.count++
  }

  getElementAt(index) {
    if (index < 0 || index >= this.count) return false
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  // 从任意位置移除元素
  removeAt(index) {
    if (!this.isEffectIndex(index)) throw new Error('error index') 

    let current = this.head
    let tail = this.tail
    if (index === 0) {
      if (this.count === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
        current.next = null
        this.head.prev = null
      }
    } else if (index == (this.count - 1) ) {
      // 删除的元素在末尾
      this.tail = this.tail.prev
      this.tail.next = null
      tail.prev = null
    } else {
      let currentNode = this.getElementAt(index)
      let preNode = currentNode.prev
      let nextNode = currentNode.next

      current.prev = null
      current.next = null
      preNode.next = nextNode
      nextNode.prev = preNode
    }

    this.count--

  }



} 

const dblinkL = new DoublyLinkedList()
dblinkL.push(1)
dblinkL.push(2)
dblinkL.push(3)

dblinkL.insert(5, 2)

dblinkL.removeAt(1)
dblinkL.removeAt(dblinkL.count - 1)
dblinkL.removeAt(1)
dblinkL.removeAt(0)


console.dir(dblinkL, {depth: 8});
