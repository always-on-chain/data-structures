var Queue = function() {
  var someInstance = {};
  var dequeue = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var size = Object.keys(storage).length + dequeue;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    dequeue++;
    var smallestKey = Object.keys(storage).length;
    for (var key in storage) {
      if (key < smallestKey) {
        smallestKey = key;
      }
    }
    var value = storage[smallestKey];
    delete storage[smallestKey];
    return value;
  };

  someInstance.size = function() {
    var size = Object.keys(storage).length;
    return size;
  };

  return someInstance;
};
