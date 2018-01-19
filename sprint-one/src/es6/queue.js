class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.countEnqueue = 0;
    this.countDequeue = 0;
    this.storage = {};
  }

  size() {
    return this.countEnqueue - this.countDequeue;
  }

  enqueue(value) {
    this.storage[this.countEnqueue] = value;
    this.countEnqueue++;
  }

  dequeue() {
    if (this.countDequeue === this.countEnqueue) {
      return;
    }
    var elimatedValue = this.storage[this.countDequeue];
    delete this.storage[this.countDequeue];
    this.countDequeue++;
    return elimatedValue;
  }
}
