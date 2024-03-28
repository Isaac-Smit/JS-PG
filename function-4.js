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