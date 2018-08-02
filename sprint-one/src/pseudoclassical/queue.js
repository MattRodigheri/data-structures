var Queue = function() {
  this.counter = 0;
  this.storage = {}
  this.storageKeys = Object.keys(this.storage);
};


Queue.prototype.enqueue = function(value) {
  this.counter++;
  this.storageKeys.push(value);
}

Queue.prototype.dequeue = function() {
  this.counter--;
  if (this.counter < 0) {
    this.counter = 0;
  }
  return this.storageKeys.shift();
}

Queue.prototype.size = function() {
  return this.counter;
}
