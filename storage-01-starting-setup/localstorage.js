const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');


const userId = 'u123';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['cooking', 'sport']
};


storeBtn.addEventListener('click', ()=>{
    sessionStorage.setItem('uid', userId);
    //localStorage.setItem('uid', userId);
    localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', ()=>{
    const extractedId = sessionStorage.getItem('uid');
    const extractedUser = localStorage.getItem('user');
    console.log(extractedUser);
    if (extractedId) {
        console.log('Got the Id - ' + extractedId);
    } else {
        console.log('Id not found.');
    }
});