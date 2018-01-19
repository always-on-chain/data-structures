var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  return obj;
};

var stackMethods = {
  count: 0,
  storage: {}
};

stackMethods.size = function() {
  return this.count;
};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};


stackMethods.pop = function(value) {
  if (this.count > 0) {
    var poppedValue = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
  }
  return poppedValue;
};


