class Stack {
  constructor() {
   this.array = [];
  }

  peek() {
    return console.log(this.array[this.array.length-1]);
  }

  push(value) {
    this.array.push(value);
    return console.log(this);
  }

  pop() {
    this.array.pop();
    return console.log(this);
  }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Youtube');
myStack.push('Udemy');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.peek();
