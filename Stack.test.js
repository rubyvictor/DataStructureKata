const Stack = require('./Stack');

describe('Stack Tests', () => {
    it('should pop item from top of the stack', () => {
        const testStack = new Stack(1,2,3,4);
        const popped = testStack.pop();
        expect(popped).toEqual(4);
        expect(testStack).toEqual({"data":[1,2,3]});
    });

    it('should push item to the top of the stack', () => {
        const testStack = new Stack(1,2,3);
        const pushed = testStack.push(88);
        expect(pushed).toEqual(4);
        expect(testStack).toEqual({"data":[1,2,3,88]})
    });
});