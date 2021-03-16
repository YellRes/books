// 用链表创建 栈
// 链表 这里是 双向链表
// 说实话 不知道有什么用
const {} = require('./doublyLinkedList')

class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList()
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        this.items.removeAt(this.items.count - 1)
    }
}

const stackLinkList = new StackLinkedList() 