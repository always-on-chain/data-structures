var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  return obj;
};

var queueMethods = {
  countEnqueue: 0,
  countDequeue: 0,
  storage: {}
};

queueMethods.size = function() {
  return this.countEnqueue - this.countDequeue;
};

queueMethods.enqueue = function(value) {
  this.storage[this.countEnqueue] = value;
  this.countEnqueue++;
};

queueMethods.dequeue = function() {
  if (this.countDequeue === this.countEnqueue) {
    return;
  }
  var elimatedValue = this.storage[this.countDequeue];
  delete this.storage[this.countDequeue];
  this.countDequeue++;
  return elimatedValue;
};

