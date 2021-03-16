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
    if (position >= 0 && position < this.count) {
      const node = new Node(value)
      let current = this.head
      let preNode = null
      if (position == 0) {
        node.next = current
        this.head = node
      } else {
        while (position) {
          preNode = current
          current = current.next
          position--
        }
        node.next = preNode.next
        preNode.next = node
      }
      this.count++
      return true
    }

    return false
  }

  getElementAt(index) {}

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

  removeAt(position) {
    if (position >= 0 && position < this.count ) {
      let current = this.head

      if (position === 0) {
        this.head = current.next
      } else {
        let preNode
        while(position) {
          preNode = current
          current = current.next
          position--
        }

        preNode.next = current.next
      }
      this.count--
      return current.value
    }

    return undefined
  }

  indexOf(value) {
    let current = this.head
    let index = -1
    while(current !== null) {
      // 循环一次 数字加一
      index++
      if (current.value === value) {
        return index
      }
      current = current.next
    }

    return -1
  }

  isEmpty() {
    return this.head
  }

  isEffectIndex(index) {
    if (index < 0 || index >= this.count) {
      return false
    } 

    return true
  }

  size() {}

  toString() {}

}


// const ll = new LinkList()
// ll.push(1)
// ll.push(2)
// ll.push(3)
// ll.push(4)
// ll.push(5)



module.exports = {
  Node,
  LinkList
}

