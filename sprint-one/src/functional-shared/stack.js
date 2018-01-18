var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.count = 0;
  someInstance.size = stackMethods.size;
  someInstance.storage = {};
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.count;
};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var poppedValue = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
  }
  return poppedValue;
};



