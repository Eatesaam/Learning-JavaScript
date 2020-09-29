// create an constant
const defaultResult = 0;

// create a variable
let currentResult = defaultResult;

// create an array that store user input history
let logEntries = [];

// create a function that get user input 
function getUserNumberInput(){
    return parse(userInput.value);
} 


function createAndWriteOutput(operator, resultBeforeCal, calNumber){
    const calDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
    outputResult(currentResult , calDescription);
}

// create a function maintains log history
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation : operationIdentifier,
        prevResult : prevResult,
        number : operationNumber,
        result : newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

// create a function the sum numbers
function add(){
    const enterNumber =  getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enterNumber;
    createAndWriteOutput('+', initialResult, enterNumber);
    writeToLog("ADD", initialResult, enterNumber, currentResult);   
}

// create a function the subtract numbers
function subtract(){
    const enterNumber =  getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enterNumber;
    createAndWriteOutput('-', initialResult, enterNumber)
    writeToLog("SUB", initialResult, enterNumber, currentResult);
}

// create a function the multiply numbers
function multiply(){
    const enterNumber =  getUserNumberInput();
    const initialResult = currentResult;
    currentResult *=  enterNumber;
    createAndWriteOutput('*', initialResult, enterNumber)
    writeToLog("MUL", initialResult, enterNumber, currentResult);
}

// create a function the divide numbers
function divide(){
    const enterNumber =  getUserNumberInput();
    const initialResult = currentResult;
    currentResult /=  enterNumber;
    createAndWriteOutput('/', initialResult, enterNumber)
    writeToLog("DIV", initialResult, enterNumber, currentResult);
}



// create an event listner of button
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




/* 
// assign a value in variable
currentResult = add(1 , 2);

/*
console.log(currentResult);

// concatenate a string 
let resultDescription = ""+ defaultResult +" +  10 + 15";


// string literal
let resultDescription = `( ${defaultResult} + 10 ) + 15`;
/*
// calling a function from another file
outputResult(currentResult , resultDescription);


/*
// create a function
function myFunc(name){
    alert(name);
}

myFunc("MAX");
*/
