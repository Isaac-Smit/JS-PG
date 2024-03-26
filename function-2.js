// Create a function that takes an array and return the types of the elements within (date types)
// the original array and display it in a new array
// ES5
function arrData(arr) {
    let newArray = []
    for(let i = 0; i<arr.length; i++) {
        newArray[i] = typeof(arr[i])
    }
    return newArray
}
//console.log(arrData(['Beer', 1, 2, 3, 'cat']))

// ES6 version

const arrTypesNew = arr => arr.map(x => typeof x)

//console.log(arrTypesNew(['Beer', 1, 2, 3, 'cat']))

// .map will take the the results of a function them re populate them into a new array.

//Create a function that take 2-d arrays and returns the sum of minimum values in reach row



function sumMinArrays(arr) {
let sumTotal = 0;

for(let i = 0; i < arr.length; i++) {
    let y = arr[i][0]
    for(let x = 0; x<arr[i].length; x++) {
        if(y > arr[i][x]) {
            y = arr[i][x]
        }

    }
    sumTotal += y
}
return sumTotal
}
console.log(sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]))

//ES6
 const sumMinArraysnew = arr => arr.reduce((a,b) => a + Math.min(...b),0)

 //Create a function that takes an array and returns duplicate numbers in a new array
 
const ArraysDuplicateNumbers = arr => (
    arr = [...new Set([...arr.filter(num =>
        arr.indexOf(num) !== arr.lastIndexOf(num)
        )])].sort((a,b) => a-b),
        arr.length ? arr: null
)

//console.log(ArraysDuplicateNumbers([1,2,3,4,3,6,1]))



 //let numbersArray = [1, 2, 3, 4, 2, 5, 3, 6, 7, 8, 4, 9, 10, 1];

 function arraysDuplicateNumbers(arr) {
    let duplicates = [];

    for(let i = 0; i <arr.length; i++) {
         for(let x = i + 1; x<arr.length; x++)
                if (arr[x] === arr[i] && !duplicates.includes(arr[i])) {
                    duplicates.push(arr[i]);
             }
        }
        return duplicates
    }
console.log(arraysDuplicateNumbers([1, 2, 3, 4, 2, 5, 3, 6, 7, 8, 4, 9, 10, 1, 1]))