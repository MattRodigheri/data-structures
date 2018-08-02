var Stack = function() {
  this.counter = 0;
  this.storage = {}
  this.storageKeys = Object.keys(this.storage);

};

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
