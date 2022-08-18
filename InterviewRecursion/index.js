console.log("hello world")

//Problem 1: Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

const sumRange = (n) => {
    if(n === 1){
        return 1
    }
    return n + sumRange(n-1)
}

console.log(sumRange(6))

//Problem 2: Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

const power = (n, e) => {
    if (e === 0){
        return 1
    }
    return n * power(n, e-1)
}

console.log(power(2,2))

//Problem 3: Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

// Already written

//Problem 4: Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

//Help

//Problem 5: Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray(array){
	if(array.length === 0) return 1;

	return array.shift() * productOfArray(array);
}

//explenation with [1,2,3,4,5]
//productOfArray([1,2,3,4,5])
//  1 * productOfArray([2,3,4,5])
//      2 * productOfArray([3,4,5])
//          3 * productOfArray([4,5])
//              4 * productOfArray([5])
//                  5 * productOfArray([])
//                  return 1
//              return 1 * 5
//          return 5 * 4
//      return 20 * 3
//  return 60 * 2
//return 120 * 1

console.log(productOfArray([1,2,3,4,5]))

//Problem 6: Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value

const contains = (object, val) => {
    for(const key in object){
		if(typeof object[key] === 'object'){
			return contains(object[key], val);
		}

		if (object[key] === val){
			return true;
		}
	}
	return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt, doesntHaveIt);

/////Steps checks if an object's key value is an object if so it runs the function again at a lower level til it gets to a key whose value is not a object
/////Steps If the key value is equal to our input value it returns true otherwise false


//Explenation
//contains(nestedObject, 44)
//  contains(data, 44);
//      contains(info, 44);
//          contains(stuff, 44)
//              contains(thing, 44);
//                  contains(moreStuff, 44);
//                      if moreStuff.magicNumber == 44 retutn true
//                  return true
//              return true 
//          return true
//      return true
//  return true
//return true