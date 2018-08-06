var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;//this node's tail points to new node
      this.tail = newNode;//newNode is now tail
    }

  };

  list.removeHead = function() {
    var value = this.head.value;//'value' = head of 'list'
    this.head = this.head.next;// head of 'list' = next node's head
    return value;//returning head that was removed (before it was set to the next head)
  };

  list.contains = function(target) {
    var startNode = this.head

    while(startNode) {
      if(startNode.value === target) {
        return true;
      } else {
        startNode = startNode.next;
      }
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    adding node to the list : O(n)
    removing node from the list : O(n)
    to find an element from the list: O(n)
 */
