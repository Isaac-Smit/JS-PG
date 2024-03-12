//SECTION - Javascript Arrays

//NOTE - Arrays are a special type of object that can access through numbers from '0' - 'N-1'

let arr = []

arr = ['isaac', 1, 'food', 100]
console.log(arr[2])

//NOTE - push() pop()
//SECTION - push() = adding a new item to the end of an array.
arr.push('Joe')
console.log(arr)

//SECTION - pop() = removing an item from the end of an array.
let lastItem = arr.pop()
console.log(lastItem)
console.log(arr)

//ANCHOR - Javascript for loop, this is considered the best way to iterate any array mathmatically through a for loop.
console.log(arr.length)
for(let i = 0; i < arr.length; i++){
    console.log(i, arr[i])
}

//SECTION - add an item to the beginning of an array
arr.unshift('apples')
console.log(arr)

//NOTE - Remone an item from the beginning of an array.
let firstItem = arr.shift()
console.log(firstItem);
console.log(arr); 

//ANCHOR - JavaScript Iterators
let a = [-5, -4, -3]
let b = 0
let c = [12, 13, 14]

//NOTE - concat() method which is used to join two or more arrays.
let result = a.concat(b, c);

let numbers = [2,4,7,8,9]

let isEven = (num) => {
    if(num % 2 == 0) {
        //console.log(num + 'is an even number')
        return
    } else {
        //console.log(num + 'is an odd number')
        return false
    }
}

//console.log(isEven(numbers))

console.log(numbers.every(isEven)) //NOTE - this accepts three arguments. and filters them into boolean values.

console.log(numbers.some(isEven))

for (let j = 0; j < numbers.length; j++) {
    let temp = numbers[j]
        if (temp % 2 == 0){
        console.log(temp + ' is an even number')
    }else{
        console.log(temp + ' is an even number')
    }
}

