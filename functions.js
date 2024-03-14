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

//console.log(checkArraySum([0, 1, 5]))
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
//console.log(numberFilter(['Ali', 3, 'Isaac', 5, 9]))


//SECTION - Write a function that takes an array with numbers and returns an array with elements mulitplied by 2

//arrayByTwo([2,5,4])

function multiTwo(arr) {
    for( i = 0; i < arr.length; i++) {
      arr[i] *= 2  
    }
    return arr
}
//one line
const onelineArray = (arr) => arr.map(el => el * 2)
//console.log(multiTwo([2,5,4]))

//Create a function which takes two strings (p1 & p2) as arguments and returns a string
//stating the winner (Rock, Paper, Scissors)

//NOTE - Game conditions
//1 - if p1 wins, return the string "The winner is P1!"
//2 - if p2 wins, return the string "The winner is p2!"
//3 - if they are the same, return "It's a draw!"

function rps(p1, p2) {
    if (p1 === p2) return 'Its a draw!'

    else if (p1 === 'Rock' && p2 === 'Scissors') return 'The winner is p1' 
    else if (p1 === 'paper' && p2 === 'rock') return 'The winner is p1' 
    else if (p1 === 'scissors' && p2 === 'paper')  return'The winner is p1'
    
    else return 'The winner is p2'
}

//console.log(rps('paper', 'rock'))

//ANCHOR - ES6 Javascript. 
function rpsTwo(p1, p2){
    
    let obj = {
        Rock: 'Scissors',
        Scissoers: 'Paper',
        Paper: 'Rock'
    }
    return p1 === p2 ? "It's a draw!" : obj[p1] === p2 ? "The Winner is p1" : "The winner is p2"
}


//ANCHOR - JS Built in function includes()

function rpsThree(p1, p2) {
    const wins = ['RockScissors', 'PaperRock', 'ScissorsPaper']
    /*
Below, .includes() checks to see if theres a specfic type of data in the array above.
Specifcally it will check the array for one of the three win conditions,
in each cell of the array are win conditions in this format: WinLose. 
so basically it would look like this ( if the value of p1 or p2 have the same value, then write "draw" 'else'
the winner is who chose the winning condition that is in each cell of the array.)

    */
    return p1 === p2 ? "It's a draw!" : `The winner is ${wins.includes(p1 + p2) ? 'p1' : 'p2'}`
}
console.log(rpsThree('Rock', 'Scissors'))