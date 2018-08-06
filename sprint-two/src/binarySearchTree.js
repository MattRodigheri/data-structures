var BinarySearchTree = function(value) {

  var binaryTree = Object.create(binaryTreeMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  return binaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(val) {

  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    }
   else {
    this.left.insert(val);
    }
  }
  else if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};
binaryTreeMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  }

  if (target < this.value) {
    if (this.left && this.left.contains(target)) {
      return true;
    } else {
      return false;
    }
  }

  if (target > this.value) {
    if (this.right && this.right.contains(target)) {
        return true;
      } else {
        return false;
    }
  }
};

binaryTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
