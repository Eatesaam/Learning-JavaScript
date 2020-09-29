// // // // const number = [1, 2, 3];
// // // // console.log(number);

// // // // const numbers = new Array(5, 2);
// // // // console.log(numbers);

// // // // const moreNumbers = Array.of( 1, 2);
// // // // console.log(moreNumbers);

// // // // const newNumbers = Array.from('Hi!');
// // // // console.log(newNumbers);

// // // // const listItems = document.querySelectorAll('li');
// // // // console.log(listItems);

// // // // const arrayListItems = Array.from(listItems);
// // // // console.log(arrayListItems);

// // // // const hobbies = ['cooking', 'sports'];
// // // // const diffarray = [1, 2, 'HI', -1, {moredetails: []}];

// // // // console.log(diffarray[2]);

// // // // const twoDimensionalArray = [ [1, 2 , 3] , [4, 5 , 6]];

// // // // for (const datainput of twoDimensionalArray) {
// // // //     for (const data of datainput) {
// // // //         console.log(data);
// // // //     }
// // // // }




// // // const hobbies = ['cooking', 'game'];
// // // hobbies.push('reading');
// // // console.log(hobbies);
// // // hobbies.unshift('coding');
// // // console.log(hobbies);
// // // hobbies.pop();
// // // console.log(hobbies);
// // // hobbies.shift();
// // // console.log(hobbies);

// // // hobbies.splice(0, 0, 'Crawling');
// // // console.log(hobbies);

// // // hobbies.splice(-1, 1);
// // // console.log(hobbies);

// // // hobbies.splice(0, 1);
// // // console.log(hobbies);


// // const testResult = [1, 2, 54, 48, 164, 4647, 4546];
// // const storeResult = testResult.slice(2);
// // const concatResult = testResult.concat(storeResult);
// // testResult.push(0.95);
// // console.log(testResult,storeResult, concatResult);
// // console.log(testResult.indexOf(54));
// // console.log(testResult.lastIndexOf());
// // console.log(testResult.includes(54)); 

// // const personData = [{name: 'Max'}, {name: 'Well'}];
// // console.log(personData.indexOf({name: 'Well'}));


// // const well = personData.find((person, idx, persons) => {
// //     return person.name === 'Well';
// // });

// // console.log(well);

// // const wellIndex = personData.findIndex((person, idx, persons) => {
// //     return person.name === 'Well';
// // });

// // console.log(wellIndex);







// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustPrices = [];


// // for (const price of prices) {
// //     taxAdjustPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {Index: idx, TaxAdjustPrice: price * (1 + tax)};
//     taxAdjustPrices.push(priceObj);
// });

// //console.log(taxAdjustPrices);

// const sortPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }{
        
//     }
// });

// console.log(sortPrices);
// console.log(sortPrices.reverse());


// const filteredArray = prices.filter(p => p > 6);

// console.log(filteredArray);



// // let sum = 0;

// // prices.forEach((price) => {
// //     sum += price;
// // });

// // console.log(sum);

// // const sum = prices.reduce((preValue, curValue, curIndex, prices) => {
// //     return preValue + curValue;
// // }, 0);

// const sum = prices.reduce((preValue, curValue) => preValue + curValue, 0);

// console.log(sum);

// const data = 'new york; 1; 2000';

// console.log(data);

// const transformData = data.split(';');
// transformData[1] = +transformData[1];

// console.log(transformData);

// const nameFragment = ['Max' , 'Well'];
// const name = nameFragment.join(' ');

// console.log(name);


const name = ['Max', 'Well', 'Mr', 30];
const [firstName, lastName, ...otherInfo] = name;

console.log(firstName, lastName, otherInfo);