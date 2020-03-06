// 1. Create a stack class
// Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

const Stack = require('./Stack')


const starTrek = new Stack();
console.log("inside of startrek",starTrek)
starTrek.push('Kirk')
console.log("inside of startrek",starTrek)
starTrek.push('Spock')
console.log("inside of startrek",starTrek)
starTrek.push('McCoy')
console.log("inside of startrek",starTrek)
starTrek.push('Scotty')
console.log("inside of startrek",starTrek)
