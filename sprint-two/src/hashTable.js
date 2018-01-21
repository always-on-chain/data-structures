

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var collArray = this._storage.get(index);
  if (collArray === undefined) {
    this._storage.set(index, []);
    this._storage.get(index).push([k, v]);
  } else if ( collArray[0][0] ===  k ) {
    collArray[0][1] = v;
    this._storage.set(index, collArray);
  } else {
    this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrayOfTupils = this._storage.get(index)
  for (var i = 0; i < arrayOfTupils.length; i++) {
    if (arrayOfTupils[i][0] === k) {
      return arrayOfTupils[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).splice(0, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
