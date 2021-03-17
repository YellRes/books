class Node {
  constructor(element, left, right) {
    this.element = element;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(element) {
    const node = new Node(element, null, null)
    if (this.root === null) {
      this.root = node
    } else {
      this.insertNode(this.root, element)
    }
  }

  insertNode(node, element) {
    if (node.element > element) {
      if (node.left === null) {
        node.left = new Node(element, null, null)
      } else {
        this.insertNode(node.left, element)
      }
    } else { 
      if (node.right === null) {
        node.right = new Node(element, null, null)
      } else {
        this.insertNode(node.right, element)
      }
    }
  } 

  search(element) {}

  inOrderTraverse() {
    this.inOrderTraverseNode(this.root, (val) => console.log(val) )
  }

  inOrderTraverseNode(node, callback) {
    if (node === null) {
      return
    }

    this.inOrderTraverseNode(node.left, callback)
    callback(node.element)
    this.inOrderTraverseNode(node.right, callback)
  }

  preOrderTraverse() {
    this.preOrderTraverseNode(this.root, (val) => console.log(val))
  }

  preOrderTraverseNode(node, callback) { 
    if (node === null) {
      return
    }

    // console.log(node)
    callback(node.element)
    this.preOrderTraverseNode(node.left, callback)
    this.preOrderTraverseNode(node.right, callback)
  }

  postOrderTraverse() {
    this.postOrderTraverseNode(this.root, (val) => console.log(val))
  }

  postOrderTraverseNode(node, callback) {
    if (node === null) {
      return
    }
    this.postOrderTraverseNode(node.left, callback)
    this.postOrderTraverseNode(node.right, callback)
    callback(node.element)

  }

  min() {}

  max() {}

  remove(key) {}
}

const tree = new BinarySearchTree()
tree.insert(1)
tree.insert(2)
tree.insert(-1)
tree.insert(-2)
tree.insert(0)
tree.insert(1.5)
tree.insert(3)


console.dir(tree, {depth: 10})
// tree.inOrderTraverse()
// tree.preOrderTraverse()
tree.postOrderTraverse()

module.exports = {
  Node,
  BinarySearchTree
}

