const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');
let db;

const dbRequest = indexedDB.open('DummyStorage', 1);

dbRequest.onupgradeneeded = function (event){
     db = event.target.result;

    const objStore = db.createObjectStore('products',  {keyPath:'id'});
    objStore.transaction.oncomplete = function(event){
    const  productStore = db.transaction('products', 'readwrite').objStore('products');
    productStore.add({id: 'p1', title: 'Afirst Product', price:12.99, tags:['expensive','luxury']});

    };
};

dbRequest.onerror = function (event){
    console.log('Error!');
};


storeBtn.addEventListener('click', ()=>{
    const  productStore = db.transaction('products', 'readwrite').objStore('products');
        productStore.add({id: 'p2', title: 'A second Product', price:122.99, tags:['expensive','luxury']});

});

retrBtn.addEventListener('click', ()=>{
    
});