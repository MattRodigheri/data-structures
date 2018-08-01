var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var storageKeys = Object.keys(storage);//array of keys in storage
  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    storageKeys.push(value);
  };

  someInstance.dequeue = function() {
    counter--;
    if (counter < 0) {
      counter = 0;
    }
    return storageKeys.shift();
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
