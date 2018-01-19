var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.countEnqueue = 0;
  this.countDequeue = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.countEnqueue - this.countDequeue;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.countEnqueue] = value;
  this.countEnqueue++;
};

Queue.prototype.dequeue = function() {
  if (this.countDequeue === this.countEnqueue) {
    return;
  }
  var elimatedValue = this.storage[this.countDequeue];
  delete this.storage[this.countDequeue];
  this.countDequeue++;
  return elimatedValue;
};


