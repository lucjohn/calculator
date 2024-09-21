let num1;
let num2;
let operator;
let midOperation = false;
let secondNum = false;
let currVal = 0;
let currDisplayed = '0';

const numButtons = document.querySelectorAll('button.num');
numButtons.forEach(button => {
    button.addEventListener('click', () => {
    if(currDisplayed == '0'){
        currDisplayed = populateDisplay(button.textContent);
    }
    else{
        if (currDisplayed.includes('.') && button.textContent == '.'){
        }
        else{
        currDisplayed = populateDisplay(currDisplayed + button.textContent);
        }
    } 
    });
});

const operationButtons = document.querySelectorAll('button.operation')
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!midOperation) {
            num1 = parseFloat(currDisplayed);
            currVal = parseFloat(currDisplayed);
            midOperation = true;
            currDisplayed = '';
            operator = button.textContent;
        }
        else{
            num1 = currVal;
            num2 = parseFloat(currDisplayed);
            currDisplayed = populateDisplay(operate(operator));
            operator = button.textContent;
            currVal = parseFloat(currDisplayed);
            currDisplayed ='';

        }
    
    });
});

document.querySelector('#AC').addEventListener('click', () => {
    currDisplayed = '0';
    currVal = 0;
    populateDisplay(0);
    midOperation = false;
});

document.querySelector('#DEL').addEventListener('click', () => {
    currDisplayed = (currDisplayed.slice(0, -1));
    populateDisplay(currDisplayed);
});

document.querySelector('#equals').addEventListener('click', () => {
   if (midOperation) { num1 = currVal;
    num2 = parseFloat(currDisplayed);
    currDisplayed = populateDisplay(operate(operator));
    console.log(operator);
    currVal = parseFloat(currDisplayed);
    midOperation = false;}
});







function populateDisplay(input){
    let display = document.querySelector(".display");
    display.textContent = input;
    return display.textContent;
}
function add(num1, num2) {
	return num1 + num2;
};

function subtract(num1,num2) {
    return num1 - num2;	
};
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2){
    if (num2 != 0 ) return num1/num2;
    else{
        return(">:T");
    }
}
function operate(operator){
    let result;
    if (operator=='+') result = add(num1, num2);
    else if (operator=='-') result = subtract(num1, num2);
    else if (operator =='X') result = multiply(num1, num2);
    else if (operator == '÷') result = divide(num1,num2);
    return result;
}



