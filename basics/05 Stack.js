class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return 'Underflow - The stack is empty';
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

// create a new stack
const myStack = new Stack();

// push elements onto the stack
myStack.push(5);
myStack.push(10);
myStack.push(15);

// display the stack's content
console.log('Stack after push operations.');
myStack.print();

// pop an element
const poppedElement = myStack.pop();
console.log('Popped element: ', poppedElement);

// check if the stack is empty
console.log('Is the stack empty? ', myStack.isEmpty());

// display the stack's content after pop
console.log('Stack after pop operation');
myStack.print();

// push, pop, and isEmpty have constant O(1) time and space complexity.
// print has linear O(n) time and space complexity.
