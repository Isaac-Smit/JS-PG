// Create a function that takes an array of stringified numbers as a parameter and return an array of numbers
// example: ["1","3", "6.7"] -> [1, 3, 6.7]

function stringtonum(arr) {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
       temp[i] = JSON.parse(arr[i])
}
return temp
}

console.log(stringtonum(["1", "3", "6.7"]))

// Create a function that returns (true) if allparametwrs are truthy and false otherwise.
// checkParam(true, true, true) -> true
// checkParam(5, 1, 3, 0) -> false
// falsey values are: false, 0, and ""

function trueFalse(arr) {
    let value = false
    for (let i = 0; i < arrlength; i++) {
        if(arr[i] !==0 && arr[i] !== false && arr[i] !=="") {
            value = true
        }
    
    }
    return value
}
console.log(trueFalse)

//ES6
const checkParam = (...args) => args.every(Boolean)
console.log(checkParam(5,1,3,1))

//ES5

function checkParamThree(param1, param2, param3, param4) {
    if (param1 && param2 && param3 && param4){
        return true 
        } else {
                return false
            }
        }

console.log(checkParamThree(1,3,5,2))

//Create a function to check if an array contains a particular number
//ex: checkArray([5,5,6]), 5) -> true
//ex: checkArray([1,3,5,7,10]) -> false

function checkForNum(arr) {
    let numberArray = []
    for (let i = 0; i < arrlength; i++) {
        numberArray.includes(el)
    }
    
}

function checkArrayTwo(arr, num) {
    if(arr.includes(num)) {
    return true
} else
return false
}

//console.log(checkArrayTwo([5,5,6]), 7)

function checkArrayThree(arr, x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == x) {
            return true
        } else {
        }
    }
    return false
}
console.log(checkArrayThree([5,5,6],[]))