var Queue = function() {
  var newQueue = {};

  newQueue.storage = {};
  newQueue.counter = 0;
  newQueue.enqueue = queueMethods.enqueue;
  newQueue.dequeue = queueMethods.dequeue;
  newQueue.size = queueMethods.size;

  newQueue.storageKeys = Object.keys(newQueue.storage);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.counter++;
  this.storageKeys.push(value);
};

queueMethods.dequeue = function() {
  this.counter--;
  if (this.counter < 0) {
    this.counter = 0;
  }
  return this.storageKeys.shift();
};

queueMethods.size = function() {
  return this.counter;
};
