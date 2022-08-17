console.log("hello world")

const factorial = (n) => {
    if(n === 1){
        return 1;
    }
    return n * factorial(n-1) 
}

console.log('Factorial 100: ' + factorial(100))
console.log('Factorial 5: ' + factorial(5))
console.log('Factorial 4: ' + factorial(4))
console.log('Factorial 3: ' + factorial(3))
console.log('Factorial 2: ' + factorial(2))
console.log('Factorial 1: ' + factorial(1))