// 链表

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkList {
  constructor() {
    this.head = null 
  } 

  // 最后一位添加
  add(value) {
    const node = new Node(value)
    
    const lastNode = this.findLastNode()
    lastNode.next = node
    
  }
  
  // 找到最后一个node节点
  findLastNode() {

    if (!this.head) return this.head
    
    while(this.head.next) {
      this.head = this.head.next
    }

    return this.head
  }

  // 遍历链表
  traverse() {
    while(this.head.next) {

    }
  }

  findNumber() {

  }

  insertNode() {

  }

}