// 链表

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.count = 0
    this.head = null 
  } 

  // 最后一位添加
  push(value) {
    const node = new Node(value)

    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while(current.next != null) {
        current = current.next
      }

      current.next = node
    }
    
    this.count++
    
  }
  
  // 找到最后一个node节点
  findLastNode() {

    if (!this.head) return this.head
    
    while(this.head.next) {
      this.head = this.head.next
    }

    return this.head
  }

  insert(value, position) {
  }

  getElementAt(index) {
  }

  remove(value) {
    if (!this.isEmpty()) {
      // 1. 链表为空
      throw 'the stack is empty'
    } else if (this.head.value === value) {
      // 2. 链表不为空
      // 2.1 移除的是链表的头指针的元素
      this.head = this.head.next
      return --this.count
    } else {
      // 2.2 移除的不是头指针元素
      let current = this.head
      let preNode = null
      while(current !== null) {
        if (current.value === value) {
          preNode.next = current.next
          return --this.count
        }
        preNode = current
        current = current.next
      } 
    }
  }

  indexOf(value) {}

  removeAt(position) {}

  isEmpty() {
    return this.head
  }

  size() {}

  toString() {}

}


const ll = new LinkList()
ll.push(15)
ll.push(10)
ll.push(9)
ll.push(19)
ll.push(18)

console.dir(ll, {depth: 10});

ll.remove(18)
console.dir(ll, {depth: 10});

