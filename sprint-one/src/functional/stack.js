var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var storageKeys = Object.keys(storage);//array of keys in storage
  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
    storageKeys.push(value);
    // return storageKeys;
    // console.log(storageKeys)
  };

  someInstance.pop = function() {
    counter--;
    if (counter < 0) {
      counter = 0;
    }
    return storageKeys.pop();
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
