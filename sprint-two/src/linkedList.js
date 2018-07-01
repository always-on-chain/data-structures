var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);

    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else if (list.head && list.tail === null) {
      list.tail = node;
      list.head.next = list.tail;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var valueOfFormerHead = list.head.value;
    list.head = list.head.next;
    return valueOfFormerHead;
  };

  list.contains = function(target) {
    var node = list.head;

    while (node) {
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
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
 */
