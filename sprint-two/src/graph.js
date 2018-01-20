

// Instantiate a new graph
var Graph = function() {
    // this.nodes = [];
    this.nodes = {};
};


Graph.prototype.addNode = function(node) {
    this.nodes[node] = [];
};

Graph.prototype.contains = function(node) {

  return Boolean(this.nodes[node]);

};

Graph.prototype.removeNode = function(node) {
    for (var key in this.nodes){
        var value = this.nodes[key].indexOf(node);
        if (this.nodes[key].indexOf(node) > -1){
            this.nodes[key].splice(value,1);
        }
    }
    delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    return _.contains(this.nodes[fromNode], toNode)
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var rem1 = this.nodes[fromNode].indexOf(toNode);
  var rem2 = this.nodes[toNode].indexOf(fromNode);
  this.nodes[fromNode].splice(rem1,1);
  this.nodes[toNode].splice(rem2,1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
