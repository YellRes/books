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
    if (this.root) {
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

    // 中序遍历 输出的数字是正序的
    // 后序遍历 输出的数字是逆序的
    this.traverse(node.right)
    console.log(node.value)
    this.traverse(node.left)
  }

  // 找值
  findNumber(value, node) {
    if (!node ) {
      return false
    }

    if (node.value === value) {
      return true
    }

    let leftRes = this.findNumber(value, node.left)
    let rightRes = this.findNumber(value, node.right)
    // console.log('ds');
    return leftRes || rightRes
  }

}

const tree1 = new Tree()

for (let i = 0; i < 1e3; i++) {
  tree1.add(i)
}

console.log(tree1.findNumber(1e3 - 1, tree1.root))

// console.dir(tree1, {depth: 100});
// tree1.traverse(tree1.root)



