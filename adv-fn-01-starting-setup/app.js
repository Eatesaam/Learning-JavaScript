 function add(num1, num2) {
    return num1 + num2;
}
console.log(add(3,4));
console.log(add(15,14));

function addRandom(num1) {
    return num1 + Math.random();
}
console.log(addRandom(5));

let prevResult= 0;

function addNumbers(num1, num2) {
    const sum = num1 + num2;
    prevResult = sum;
    return sum;
}
console.log(addNumbers(10,15));

const hobbies = ['cooking', 'diving'];

function printHobbies(h) {
    h.push('new hobby');
    console.log(h);
}

printHobbies(hobbies); 

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }
    return calculateTax;
}


const calculateAmount = createTaxCalculator(0.25);
console.log(calculateAmount(100));

function powerOf(x, n) {
    // if (n === 1) {
    //     return x;
    // }
    // return x * powerOf(x, n - 1);

    return n === 1 ? x : x * powerOf(x, n - 1);
}



console.log(powerOf(2,3)); 


