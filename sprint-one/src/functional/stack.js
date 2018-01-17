var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var size = Object.keys(storage).length;
    storage[size] = value;
  };

  someInstance.pop = function() {
    var size = Object.keys(storage).length - 1;
    var value = storage[size];
    delete storage[size];
    return value;
  };

  someInstance.size = function() {
    var size = Object.keys(storage).length;
    return size;
  };

  someInstance.sequentialAdd = function(value) {
    var savedValue = value;
    return savedValue;
  };

  return someInstance;
};
