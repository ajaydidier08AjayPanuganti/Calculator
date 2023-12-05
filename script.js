var number = document.querySelectorAll(".number")
var display = document.querySelector(".display_upper")
var displayL = document.querySelector(".display_lower")
var operator = document.querySelectorAll(".operator")
var operator_count = 0

number.forEach(numb => {
    numb.addEventListener('click',()=>{
    display.textContent = display.textContent + numb.textContent
    })
})

operator.forEach(op => {
    op.addEventListener('click',()=>{
        operator_count++
        if (operator_count < 2){
        display.textContent = display.textContent + " " + op.textContent + " "
        }
        else{
            operation(display.textContent,op.textContent)
            operator_count = 0
        }
    })
})


function operation(expression,nextOperator){
    let equation = expression.split(" ")
    let firstNumber = Number(equation[0])
    let firstOperator = equation[1]
    let secondNumber = Number(equation[2])

    switch(firstOperator){
        case "+":
            add(firstNumber,secondNumber, nextOperator)
            break;
        case "-":
            subtract(firstNumber,secondNumber, nextOperator)
            break;
        case "X":
            multiply(firstNumber,secondNumber, nextOperator)
            break;
        case "÷":
            divide(firstNumber,secondNumber, nextOperator)
            break;
    }
}

function add(firstNumber,secondNumber, nextOperator){
    result(firstNumber + secondNumber, nextOperator)
}

function subtract(firstNumber,secondNumber, nextOperator){
    result(firstNumber - secondNumber, nextOperator)
}

function multiply(firstNumber,secondNumber, nextOperator){
    result(firstNumber * secondNumber, nextOperator)
}

function divide(firstNumber,secondNumber, nextOperator){
    result(firstNumber / secondNumber, nextOperator)
}

function result(finalResult,nextOperator){
    displayL.textContent = finalResult
    display.textContent = finalResult + " " + nextOperator
}

