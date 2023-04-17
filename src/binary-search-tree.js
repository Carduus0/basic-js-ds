const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 * class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
 */
class BinarySearchTree {
  constructor() {
    this.rOot = null; // root
  }
  root() {
    return this.rOot;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.rOot) {
      this.rOot = newNode;
      return;
    }
    let currentNode = this.rOot;
    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }

    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  has(data) {
    let node = this.rOot;
    while (true) {
      if (node.data > data) {
        if (node.left) {
          node = node.left;
        } else {
          return false;
        }
      } else if (node.data < data) {
        if (node.right) {
          node = node.right;
        } else {
          return false;
        }
      }

      if (node.data === data) return true;
    }
    /*if (!node) {
      return false;
    } else if (data < node.data) {
      return this.has(node.left, data);
    } else if (data > node.data) {
      return this.has(node.right, data);
    } else {
      return true;
    }*/
  }

  find(data) {
    return search(this.rOot, data);
    function search(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return search(node.left, data);
      } else if (data > node.data) {
        return search(node.right, data);
      } else {
        return node;
      }
    }
  }

  remove(data) {
    this.rOot = removeNode(data, this.rOot);
    function removeNode(data, node) {
      if (!node) {
        return null;
      }
      if (node.data < data) {
        node.right = removeNode(data, node.right);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(data, node.left);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = removeNode(maxLeft.data, node.left);
        return node;
      }
    }
  }

  min() {
    if (!this.rOot) {
      return null;
    }
    let node = this.rOot;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rOot) {
      return null;
    }
    let node = this.rOot;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}
const binarySearch = new BinarySearchTree();
module.exports = {
  BinarySearchTree,
};
