const Stack = require("./Stack");

class Queue {
  constructor(...data) {
    this.inStack = new Stack(...data);
    this.outStack = new Stack();
  }

  enQueue(element) {
    return this.inStack.push(element);
  }

  deQueue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
          const popped = this.inStack.pop();
        this.outStack.push(popped);
      }
    }
    return this.outStack.pop();
  }
}

module.exports = Queue;
