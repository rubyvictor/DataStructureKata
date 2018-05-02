class Stack {
  constructor(...data) {
    this.data = data;
  }

  pop() {
    return this.data.pop();
  }

  push(element) {
    return this.data.push(element);
  }
}

module.exports = Stack;
