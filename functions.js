//function greeting() {
//return console.log('Hello World')
//}

//console.log(greeting())

//NOTE - Writing a function that adds any two numbers and returns the result.
//function addition(a, b) {
    //return a+b
//}

//console.log(addition(2, 3));

//NOTE - Write a function that takes an array and checks whether th sum of its element is even or odd. (the value should return even or odd)
function checkArraySum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    if(sum%2 == 0) {
    return 'even'}
    else { return 'odd'}
}

console.log(checkArraySum([0, 1, 5]))
// this is how we  filter integers from strings and letters
function numberFilter(arr) {
    let integer = []
    // here we declare the function and integer value
for( let i = 0; i < arr.length; i++) {
    // then we 
    if(Number.isInteger(arr[i])) {
    integer.push(arr[i])
}
} 
return integer
}
console.log(numberFilter(['Ali', 3, 'Isaac', 5, 9]))