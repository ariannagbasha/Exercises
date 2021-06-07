// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];


const nonSedanBrands = carBrands.filter((car) => car.type !== 'sedan')
console.log(nonSedanBrands)



/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

const reverseStringLooping = (str) => {
    let reversedStr = ''
    for(let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i]
    }
    return reversedStr
}

console.log(reverseStringLooping('cat'))

// 3.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];


const shop = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
}


console.log(shop(wishlist));


// 4.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.






// Recursion is where a function calls itself

// A recursive algorithm consists two fundamental parts:

// 1. The base case where we stop the recursive call
// 2. The recursive step, where we can call the function by making another call 

// Say if you are reversing a string and the first thing that comes to mind when reversing is looping string backwards


//  a part of the function call

const reversedStringRecursion = (reversedStr) => {
    //base step
    // If you think about the base step of this is that reversed step is reversedStr = '', this is the beginning where we stop 
    if( reversedStr === '') {
      return ''
    }

    // Now what about the recursive step ? 
    // in the prior step I had i start at i = str.length - 1 why ? Because I wanted start at the end, in this case, we will be starting at the beginning and then stacking it
    // reversedStr.charAt(0) == 'c'
    // reversedStr.substr(1) == 'at'
    // recursive step
    else {
      return reversedStringRecursion(reversedStr.substr(1)) + reversedStr.charAt(0);
    }
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb//
/* 
// Recursive

Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("cat")   will return   reverseString("at")           + "c"
2nd call – reverseString("at")    will return   reverseString("t")            + "ac"
3rd call – reverseString("t")     will return   reverseString("t")             + "tac"
*/
}

console.log(reversedStringRecursion('cat'))