console.log("hello world")

let arr = []

//Fibonacci using iteration
let fibs = (n) => {
    for(let i = 0; i<=n; i++){
        if(i <= 1) {
            arr.push(1)
        } else {
            arr.push(arr[i-2] + arr[i-1])
        }
    }
    return arr;
}

console.log(fibs(20))

//Fibonacci using Recursion

let fibsRec = (n) => {
    if(n < 2) {
        return n;
    }
    return fibsRec(n-2) + fibsRec(n-1)
}

console.log(fibsRec(9))