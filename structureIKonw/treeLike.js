class Node {
  constructor(value) {
    this.value = value;
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  add(value) {
    // 1. root 为空
    if (!this.root) {
      this.root = new Node(value)
      return
    } 
    
    // 2. root  不为空
    if (this.root.value < value) {
      this.insertNode(null, this.root, value)
    }

  }

  // 把节点插入树中
  insertNode(previousNode, currentNode, value) {
    const newNode = new Node(value)
    if (!currentNode) {
      if (previousNode.value > value) {
        previousNode.left = newNode
      } else {
        previousNode.right = newNode
      }
      return 
    }

    if (currentNode.value > value) {
      this.insertNode(currentNode, currentNode.left, value)
    } else {
      this.insertNode(currentNode, currentNode.right, value)
    }
  } 

  // 遍历
  traverse(node) {
    if (!node) {
      return
    }
    console.log(node.value)
    this.traverse(node.left)
    this.traverse(node.right)
  }

  lastTraverse(node) {
    if (!node) {
      return
    }

    console.log(node.value)
    this.lastTraverse(node)
    this.lastTraverse(node.left)    
  }


}

const tree1 = new Tree()

tree1.add(1)
tree1.add(-1)
tree1.add(2)
tree1.add(3)
tree1.add(3.5)
tree1.add(4)
tree1.add(4.5)

// console.dir(tree1, {depth: 100});
tree1.traverse(tree1.root)
tree1.lastTraverse(tree1.root)



