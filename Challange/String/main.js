
// //  Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function toJadenCase(str) {
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  
  const jadenCasedString = toJadenCase("How can mirrors be real if our eyes aren't real");
  console.log(jadenCasedString); // Output: "How Can Mirrors Be Real If Our Eyes Aren't Real"
  

//  Split
let str = "Hello , World!"
console.log(str.split(" "))

let string = "How can mirrors be real if our eyes aren't real"
console.log(string.split(" " , 3))

// Slice
let string1 = "Hello World!"
console.log(string1.slice(1 , 5))

// Join
const arr = ["Banana" , "Orange" , "Apple" , "Mango"]
console.log(arr.join(" "))


//  Description:
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 

function isTriangle(a, b, c) {
    return a > 0 && b > 0 && c > 0 && 
           a + b > c && a + c > b && b + c > a;
  }
  
  // Example usage
  console.log(isTriangle(1, 2, 2)); // Output: true
  console.log(isTriangle(4, 2, 3)); // Output: true
  console.log(isTriangle(1, 2, 3)); // Output: false
  console.log(isTriangle(-5, 1, 3)); // Output: false
  console.log(isTriangle(0, 2, 3)); // Output: false
  console.log(isTriangle(1, 2, 9)); // Output: false
  


