// const ids = new Set(['Hi', 2, 3]);
// ids.add(2);

// if (ids.has('Hi')) {
//     ids.delete('Hi')
// }

// console.log(ids.has(1));

const person1 = {name: 'Max'};
const person2 = {name: 'Well'};

const personData = new Map([[person1, [{date: 'yesterday', price: '10'}]]]);
personData.set(person2, [{date: 'two weeks ago', price: '100'}]);

console.log(personData);
console.log(personData.get(person1));


for (const [key, value] of personData.entries()) {
    console.log(key , value);
}

for (const key of personData.keys()) {
    console.log(key);
}