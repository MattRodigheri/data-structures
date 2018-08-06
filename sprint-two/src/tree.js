var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));//Tree(value) because it creates a new node with its own children array
};

treeMethods.contains = function(target, node) {
  node = node || this;//node is equal to the node that is passed in during recursion or 'this'

  var result = false;//setting initial value of result/default value

  if (node.value === target) {
    result = true;//if value === target, result = true;
  }

  for (var i = 0; i < node.children.length; i++) {//loop through 'children' of node
    if (node.contains(target, node.children[i])) {//run contains recursively on new node
      result = true;//if value === target, result = true;
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
  Adding a node: O(1)
  Finding a node value: O(n)
 */
  
