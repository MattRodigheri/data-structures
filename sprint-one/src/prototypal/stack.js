var Stack = function() {

  var newStack = Object.create(Stack.prototype);
  newStack.counter = 0;
  newStack.storage = {};
  newStack.storageKeys = Object.keys(newStack.storage);

  return newStack;
};

var stackMethods = {};

Stack.prototype.push = function(value) {
  this.counter++;
  this.storageKeys.push(value);
}

Stack.prototype.pop = function() {
  this.counter--;
  if (this.counter < 0) {
    this.counter = 0;
  }
  return this.storageKeys.pop();
}

Stack.prototype.size = function() {
  return this.counter;
}
