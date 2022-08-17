console.log("hello world")

let arr = []

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