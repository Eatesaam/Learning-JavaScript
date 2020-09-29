const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  
  navigator.geolocation.getCurrentPosition(postData => {
    console.log(postData);
  }, error =>{
    console.log(error);
  });
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (let i = 0; i < 10000000; i++) {
//   result += i;
// }

// console.log(result);