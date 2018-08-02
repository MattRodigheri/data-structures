class Queue {
  constructor() {
    this.counter = 0;
    this.storage = {}
    this.storageKeys = Object.keys(this.storage);
  }

  enqueue(value) {
    this.counter++;
    this.storageKeys.push(value);
  }

  dequeue() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = 0;
    }
    return this.storageKeys.shift();
  }

  size() {
    return this.counter;
  }

}
