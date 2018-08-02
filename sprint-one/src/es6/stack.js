class Stack {
  constructor() {
    this.counter = 0;
    this.storage = {}
    this.storageKeys = Object.keys(this.storage);
  }

  push(value) {
    this.counter++;
    this.storageKeys.push(value);
  }

  pop() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = 0;
    }
    return this.storageKeys.pop();
  }

  size() {
    return this.counter;
  }

}
