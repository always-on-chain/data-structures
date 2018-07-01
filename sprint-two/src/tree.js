var Tree = function(value) {
  var newTree = Object.create(treeMethods);

  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = new Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  var result = false;

  if (this.value === target) {
    result = true;
  }

  for (var i = 0; i < this.children.length; i++) {
    result = this.children[i].contains(target);
    if (result) {
      return true;
    }
  }

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
