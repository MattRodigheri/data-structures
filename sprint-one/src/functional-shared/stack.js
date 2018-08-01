var Stack = function() {
  var newStack = {};

  newStack.storage = {};
  newStack.counter = 0;
  newStack.push = stackMethods.push;
  newStack.pop = stackMethods.pop;
  newStack.size = stackMethods.size;

  var storageKeys = Object.keys(newStack.storage);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.counter++;
  this.storageKeys.push(value);
}

stackMethods.pop = function() {
  this.counter--;
  if (this.counter < 0) {
    this.counter = 0;
  }
  //return this.storageKeys.pop();
}

stackMethods.size = function() {
  return this.counter;
}
