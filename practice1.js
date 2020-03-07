// 1. Create a stack class
// Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

const Stack = require("./Stack");

function peek(stack) {
  console.log("stack top", stack.top);
}

const isEmpty = stack => {
  if (stack.top == null) {
    console.log(`stack is empty!!`);
  } else {
    console.log(`NO, stack is not empty`);
  }
};

const displayFirst = stack => {
  let first = stack.top;
  let temp = stack.top;
  while (temp.next != null) {
    temp = temp.next;
  }
  console.log("this is the first item it the stack", temp);
};
const starTrek = new Stack();
console.log("inside of startrek", starTrek);
starTrek.push("Kirk");
console.log("inside of startrek", starTrek);
starTrek.push("Spock");
console.log("inside of startrek", starTrek);
starTrek.push("McCoy");
console.log("inside of startrek", starTrek);
starTrek.push("Scotty");
console.log("inside of startrek", starTrek);
peek(starTrek);
displayFirst(starTrek);
isEmpty(starTrek);
