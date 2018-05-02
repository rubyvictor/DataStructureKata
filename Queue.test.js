const Queue = require("./Queue");

describe("enQueue test", () => {
  it.skip("should enqueue an element", () => {
    const queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    expect(queue).toEqual(new Queue(1, 2));
  });
});

describe("deQueue test", () => {
  it("should dequeue 1 element", () => {
    const queue = new Queue();
    queue.enQueue(1);
    const element = queue.deQueue();
    console.log(queue);
    expect(element).toEqual();
    expect(queue).toEqual(new Queue(1))
  });
});
