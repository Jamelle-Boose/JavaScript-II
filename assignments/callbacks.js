// [ ] Review the contents of the callbacks.js file. Notice you are given an array at the top of the page. Use that array to aid you with your functions.

// [ ] Complete the problems provided to you but skip over stretch problems until you are complete with every other JS file first.



// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];





  //Given this problem: 

  // firstItem passes the first item of the given array to the callback function.
  function firstItem(arr, cb) {
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0])
  }

  // Function invocation as a normal function
  firstItem(items, function(first) {
    console.log(first)
  });

  // As an arrow function
  firstItem(items, (first) => {console.log(first)})







// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr.length)
}

// As an arrow function
getLength(items, (length) => {console.log(items.length)})

// As a regular function
getLength(items, function(length) {
  console.log(items.length)
})









// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(arr.length-1)
}

// As an arrow function
last(items, (last) => {console.log(items[items.length - 1])})










// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x + y)
}

// As an arrow function
sumNums(1, 2, (sum) => {console.log(1 + 2)})












function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y)
}


// As an arrow function
multiplyNums(2, 2, (multiply) => {console.log(2 * 2)})





// var fruits = ["Banana", "Orange", "Apple", "Mango"]
// var n = fruits.includes("Apple")
// n
// const dlastItem = items/*?*/
// const lastItem = items[items.length-1]/*?*/



// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  return cb(list.includes(item))
}

contains("Pencil", items, (checkArray) => {console.log(items.includes("Pencil"))})




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
