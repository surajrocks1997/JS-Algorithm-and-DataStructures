class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return console.log(this.top);
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdTop = this.top;
      this.top = newNode;
      this.top.next = holdTop;
    }
    this.length++;
    return console.log(this);
  }

  pop() {
    if(!this.top) {
      return null;
    }
    if(this.top === this.bottom){
      this.bottom = null;
    }
    // const holdTop = this.top;
    this.top = this.top.next;
    this.length--;
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
