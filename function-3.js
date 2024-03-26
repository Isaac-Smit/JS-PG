//creating a function that takes two numbers and a math operater that will perform a calculation
//the given numbers: 2, "+", 3. the output = 5

function calNum(num1, operator, num2) {
    if(operator == '+') return num1+num2
    if(operator == '-') return num1-num2
    if(operator == '*') return num1*num2
    if(operator == '/' && num2 !=0) return num1/num2
    else return "cannot divide by 0!"
}

console.log(calNum(30, "*", 98))

//rewrite into ES6

const calNum2 = (num1, operator, num2) => operator+num2 === "/0" ? "Cannot Divide by 0!" : eval(num1+operator+num2)

console.log(calNum2(20, "+", 30))

function calNum3(num1, operator, num2) {
    switch(operator){
        case '+':
           return num1+num2
        break;
        case '-':
           return num1-num2
        break;
        case '*':
          return num1*num2
        break;
        case '/':
            if (num2 === 0) return "cannot divide by 0!"
            return num1/num2
    
    default: return false 
        break;
    }
}

console.log(calNum3(20, "+", 4))

//Create an array that rotates the values clockwise by one
//the last value is going to be the first value
//rotateArray([20, 15, 26, 22, 30]) -> ([30, 20, 15, 26, 22])

function rotateArray(arr){
    let lastValue = arr.pop()
    arr.unshift(lastValue)
    return arr
}
console.log(rotateArray([20, 15, 26, 22, 30]))
// Create a function  that takes a given date (03/26/2024) return the day of the week as a string

function dayWeek(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let date = new Date()
    return days[date.getDay()]
}
console.log(dayWeek('03/26/2024'))

//es6 date conversion
const getDayNameTwo = day => new Date(day).toLocaleDateString('en-us', {weekday: 'short'})
console.log(getDayNameTwo('03/26/2024'))

// Create a function that can take a flat array and make it have nested arrays to
// represent an incremental depth logger

// EX. nestArray ([1,2,6,3]) -> [1,[2,[6,[3]]]]

function incNestArray(nstarr) {
    if(nstarr.length == 1) return nstarr
    let temp = []
    for(let i =0; i < nstarr.length; i++)
        return [nstarr[0], incNestArray(nstarr.slice(1))]
}
console.log(incNestArray([1,2,6,3]))

const nestArray2 = arr => arr.length === 1 ? arr : [arr[0], nestArray2(arr.slice(1))]
console.log(nestArray2([1,2,3]))

const nestArray3 = arr => (
    arr.slice(0, -1).reduceRight((arr, e) => [e, arr], [arr.pop()])
)
console.log(nestArray3([1,2,3,4]))

//create a function that takes two dates and returns the number of days between the first and second date.
/* getNumbers(
    new Date("March 26 2024"),
    new Date("March 30 2024")
)*/

//output -> 4days

//ES6 (provide inline comment for this code.)
const getDays = (date1, date2) => {
    return new Date(date2 - date1).getDate() - 1
}
console.log(getDays( 
    new Date("March 26 2024"),
    new Date("March 30 2024")))