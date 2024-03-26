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