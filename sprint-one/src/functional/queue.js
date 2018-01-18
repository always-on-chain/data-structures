var Queue = function() {
  var someInstance = {};
  var countEnqueue = 0;
  var countDequeue = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[countEnqueue] = value;
    countEnqueue++;
  };

  someInstance.dequeue = function() {
    if (countDequeue === countEnqueue) {
      return;
    }
    var elimatedValue = storage[countDequeue];
    delete storage[countDequeue];
    countDequeue++;
    return elimatedValue;
  };

  someInstance.size = function() {
    return countEnqueue - countDequeue;
  };

  return someInstance;
};
