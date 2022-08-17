console.log("hello world")

//Problem 1: Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

const sumRange = (n) => {
    if(n === 1){
        return 1
    }
    return n + sumRange(n-1)
}

console.log(sumRange(6))

//Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

const power = (n, e) => {
    if (e === 0){
        return 1
    }
    return n * power(n, e-1)
}

console.log(power(2,2))