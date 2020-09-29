const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';

let person = {
    'first-name': 'Max',
    age: '30',
    hobbies: "Sports, Cooking",
    greet: function(){
        alert('Hi there.');
    }
};

/* 
person = {
    name: 'Max',
    age: '30',
    hobbies: "Sports, Cooking",
    greet: function (){
        alert('Hi there.');
    },
    isAdmin: true
};
 */
//console.log(person.greet());


console.log(person['first-name']);