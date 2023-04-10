// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

describe ('arrayShuffle', () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]

  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
  ]

  it('removes the first item from an array and shuffle the remaining content', () => {
    expect(arrayShuffle (colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(arrayShuffle(colors2)).toEqual(expect.arrayContaining(["aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

// FAIL  ./code-challenges.test.js
//   arrayShuffle
//     ✕ removes the first item from an array and shuffle the remaining content (4 ms)

//   ● arrayShuffle › removes the first item from an array and shuffle the remaining content

//     ReferenceError: arrayShuffle is not defined
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

//pseudo
//input: array
//output: array with the 0 index removed and the remaining content shuffled.
//First we will create a function called arrayShuffle, then I want to use the .shift method to remove the first value from the array. Then I want to create a random comparison function using the .sort and Math.random. When math.random is used in the sort method, I'm expecting it to shuffle the elements of the input array randomly. after researching some more about math.random, I learned that it generates a random number between 0 and 1. Therefore if we subtract 1 from this random number, we will shift the possible range of values down by 1. Additionally if the range of possible values is -1 to 1, this should mean we get a random shuffle. This should return the new subset array, shuffled.

const arrayShuffle = (arr) => {
      arr.shift()
      return arr.sort(() => Math.random()-1 && 1)
}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// Expected output: 11
// Expected output: -31

describe("voteTally", () => {
  
  const votes1 = { upVotes: 13, downVotes: 2 }
  const votes2 = { upVotes: 2, downVotes: 33 }

  it("return the total number of votes tallied", () =>{
    expect((voteTally)(votes1)).toEqual(11)
    expect((voteTally)(votes2)).toEqual(-31)

  })
})

// FAIL  ./code-challenges.test.js
//   voteTally
//     ✕ return the total number of votes tallied (1 ms)

//   ● voteTally › return the total number of votes tallied

//     ReferenceError: voteTally is not defined

// b) Create the function that makes the test pass.
//pseudo
//Input: object
//Output: end tally of votes
// I'll first create a function called voteTally, I know that this function will be inputting an object so thats what the parameter will be. Then I want to declare that the tally is the number of upvotes minus the number of downvotes. Fnally tally will be retuned.

const voteTally = (obj) => {
 let tally = obj.upVotes - obj.downVotes
 return tally
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDupes", () => {

  const dataArray1 = ["array", "object", "number", "string", "Boolean"]
  const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

it("returns one array with no duplicate values", () => {
expect ((noDupes)(dataArray1, dataArray2)).toEqual (["array", "object", "number", "string", "Boolean", "null", "undefined"])
})
})

// FAIL  ./code-challenges.test.js
//   noDupes
//     ✕ returns one array with no duplicate values (1 ms)

//   ● noDupes › returns one array with no duplicate values

//     ReferenceError: noDupes is not defined

// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
//Pseudo
//input: two arrays
//output: one array with no duplicate values
//I'll first create a function called noDupes. Then i need a way to concat the two arrays into one array. if i declare the new array equal to 1 .concat 2, that should do it. Then take that new array and use the filter method to remove the duplicate values. Filter will apply a callback function to the array we just made and will return true if the value should be in the new array and false if it shouldnt. So we can use filter with indexOf to check the index position of the first element and compare it to the index position of its first occurrance. If they are the same then the value is unique. Thus an array with no dupes should be returned.

const noDupes = (data1, data2) => {
  let newData = data1.concat(data2)
  return newData.filter((value, index) => newData.indexOf(value) === index)
}

const noDupes = (data1, data2) => {
  let combinedArr = [...data1, ...data2]
  //Spread operator combines the 2 arrays into 1.
  let filterArr = [...new Set (combinedArr)]
  //researched the Set object and found it can store unique values
  return filterArr
}