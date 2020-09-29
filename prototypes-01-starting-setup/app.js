// class Person{
//     name = 'Max';

//     constructor(){
//         this.age = 30;
//     }

//     greet(){
//         console.log('I am ' + this.name + 'and ' + this.age + ' years old');
//     }
// }


function Person() {
    this.age = 30;
    this.name = 'Max';
    this.greet = function () {
        console.log('I am ' + this.name + ' and ' + this.age + ' years old');
    };
}

const p = new Person();
p.greet();
console.log(p.toString());