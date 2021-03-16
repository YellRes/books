// 双向链表

// 1. 节点结构变化 Node
// 1.1 多了一个 prev 指向了前一个的节点

// 2. 双向链表的结构
// 2.1  指定位置插入
// 2.1.1 一般情况  找到位置节点 (currentnode) 
// node.next = currentnode.next  node.prev = currentnode
// current.next.prev = node
// currentnode.next = node 

// 2.1.2 index = 0
// 2.1.2.1 this.head = null
// this.head = node  this.tail = node

// 2.1.2.2 this.head != null
// node.next = this.head  this.head.prev = node
// this.head = node  

// 2.1.2.3 index = this.size
// node.next = null   node.prev = this.tail
// this.tail = node 



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

export {
  DoublyLinkedList
}
