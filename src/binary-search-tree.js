const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }


  root() {
    return this.treeRoot;
  }

  add(data) {
    let node = new Node(data);
    
    if (!this.treeRoot) {
      this.treeRoot = node;
      return;
    }

    let treeNode = this.treeRoot;
    
    while (treeNode) {
      if (node.data < treeNode.data) {
        
        if (!treeNode.left) {
          treeNode.left = node;
          return;
        }
        treeNode = treeNode.left;

      } else {
        
        if (!treeNode.right) {
          treeNode.right = node;
          return;
        }
        treeNode = treeNode.right;

      };
    }

    return;
  }

  has(data) {
    let treeNode = this.treeRoot;
    
    while (treeNode) {
      
      if (treeNode.data === data) {
        return true;
      } else if (data < treeNode.data) {
        treeNode = treeNode.left
      } else {
        treeNode = treeNode.right
      };
    }

    return false;
  }

  find(data) {
    let treeNode = this.treeRoot;
    
    while (treeNode) {
      if (treeNode.data === data) {
        return treeNode;
      } else if (data < treeNode.data) {
        treeNode = treeNode.left
      } else {
        treeNode = treeNode.right
      };
    }

    return null;
  }

  remove(data) {
    removeDataNode(this.treeRoot, data);
    
    function leftNode(node) {
      
      while (node.left) {
        node = node.left;
      };

      return node;
    };

    function removeDataNode(node, data) {
      if (node === null) return null;
      if (data === node.data) {
        if (!node.left && !node.right) {
          return null
        };

        if (!node.left) {
          return node.right;
        };

        if (!node.right) {
          return node.left;
        };

        let treeNode = leftNode(node.right);
        node.data = treeNode.data;
        node.right = removeDataNode(node.right, treeNode.data);
        return node;
      } else if (data > node.data) {
        node.right = removeDataNode(node.right, data);
        return node;
      } else {
        node.left = removeDataNode(node.left, data);
        return node;
      }
    }
  }

  min() {
    let minNode = this.treeRoot;
    
    while (minNode.left) {
      minNode = minNode.left;
    };

    return minNode.data;
  }

  max() {
    let maxNode = this.treeRoot;
    
    while (maxNode.right) {
      maxNode = maxNode.right;
    };

    return maxNode.data;
  }
  
}

module.exports = {
  BinarySearchTree
};