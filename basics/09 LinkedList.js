class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Time Complexity - O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  insertFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  // Time Complexity - O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insertLast(value) {
    let node = new Node(value);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      let node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedIndex;
    if (index === 0) {
      removedIndex = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedIndex = prev.next;
      prev.next = removedIndex.next;
    }
    this.size--;
    return removedIndex.value;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
      index++;
    }
    return -1;
  }

  searchAt(index) {
    if (this.isEmpty()) {
      return null;
    }
    curr = this.head;
    count = 0;
    while (curr) {
      if (count === index) {
        console.log(curr.value);
      }
      curr = curr.next;
      count++;
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is Empty');
    } else {
      let curr = this.head;
      let listValues = '';
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
// list.insertFirst(100);
// list.insertFirst(200);
list.prepend(100);
list.prepend(200);
list.prepend(300);
list.prepend(400);
// list.insertAt(300, 1);
// list.insertAt(400, 3);
// console.log(list.removeAt(0));
// console.log(list.removeAt(3));
// console.log(list);
console.log(list.search(600));
list.print();
// console.log(list.getSize());
