var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.counter = 0;
  newQueue.storage = {};
  newQueue.storageKeys = Object.keys(newQueue.storage);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.counter++;
  this.storageKeys.push(value);
}

queueMethods.dequeue = function() {
  this.counter--;
  if (this.counter < 0) {
    this.counter = 0;
  }
  return this.storageKeys.shift();
}

queueMethods.size = function() {
  return this.counter;
}
