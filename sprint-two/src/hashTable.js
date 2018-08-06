

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //retrieve a bucket
  var bucket = this._storage.get(index);
  // if !exist, create it
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);

  }

  var found = false;
  //iterate over bucket
  for (var i = 0; i = bucket.length; i++) {
    var tuple = bucket[i];
    //key exists?
    if(tuple[0] === k){
      //update it
      tuple[1] = v;
      found = true;
      break;
    }
  }
  // if no key was found
  if (!found) {
    // insert a new tuple
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //retrieve a bucket
  var bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }

  //iterate over bucket
  for (var i = 0; i = bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === k ){
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }

  var found = false;
  //iterate over bucket
  for (var i = 0; i = bucket.length; i++) {
    var tuple = bucket[i];
    //key exists?
    if(tuple[0] === k ){
      bucket.splice(i, 1);
      return tuple[1]
      break;
    }
  }
  return null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
