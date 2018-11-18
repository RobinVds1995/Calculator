//Operator functions
let add = (a,b) => a+b;
let subtract = (a,b)=>  a-b;
let multiply = (a,b) => a*b;
let checkNull = (num) => num === 0;
let divide =(a,b) => checkNull(b) ? NaN : (a/b);
//Operation executor
function operate(operation,a,b){
    switch(operation){
        case "add": return add(a,b);
        case "subtract": return subtract(a,b);
        case "multiply": return multiply(a,b);
        case "divide" : return divide(a,b);
    }
}
//Select the display

//Select the buttons
const btnsNum = document.querySelectorAll('.num');
const btnsAction=document.querySelectorAll('.action');
const btnEnter=document.querySelector('.enter');

//Add event listener to each button
btnsNum.forEach(btn => btn.addEventListener("click",updateDispNum))
btnsAction.forEach(btn =>btn.addEventListener("click", updateDispAction));
btnEnter.addEventListener("click", updateDispEnter);

//update DispNum
function updateDispNum(e) {
    let display = document.querySelector(".header");
    display.value += e.target.value;   
}
//update DispAction
function updateDispEnter(e) {
    let display = document.querySelector(".header");
    display.value = eval(display.value);
}




