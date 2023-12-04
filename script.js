var expression = document.querySelectorAll(".buttons ")
var display = document.querySelector(".display_upper")
expression.forEach(exp => {
    exp.addEventListener('click',()=>{
    display.textContent = display.textContent + exp.textContent
    })
})

/*expr.forEach(exp =>{
    exp.addEventListener('click',()=>{
        exp.textContent = "Say Hello"
    })
})*/