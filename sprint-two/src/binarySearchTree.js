var BinarySearchTree = function(value) {
    var tree = {
       left:null,
       right:null,
       value:value
    };
    _.extend(tree, methods);
    return tree;
};

var methods = {
  insert: function(value) {
    var node = BinarySearchTree(value);
    if (this.value > node.value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
    }
  }
  ,
  contains: function(value) {
    var node
    if (this.value === value){return true};
    if (this.left === null && this.right === null) {
       return false;
    }
    if (this.value > value){
        node = this.left;
    }else {
        node = this.right;
    }
    return node.contains(value) ;
  },

  depthFirstLog: function(f) {
    f(this.value);

      if (this.left) {
        this.left.depthFirstLog(f);
      }
      if (this.right) {
        this.right.depthFirstLog(f);
      }
    }
}





/*
 * Complexity: What is the time complexity of the above functions?
 */
