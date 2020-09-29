class Product {
    // title;
    // imageUrl;
    // price;
    // description;

    constructor(title, image, price, desc){
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }


}

class ElementAttribute {
    constructor(attrName, attrValue){
        this.name = attrName;
        this.value = attrValue;
    }
}


class Component {

    constructor(renderHookId){
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClasses, attributes){
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }

        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}



class ShoppingCart extends Component{
    items = [];

    constructor(renderHookId){
        super(renderHookId);
    }

    set cartItems(value){
        this.items = value;
        this.totalOutput.innerHTML =`<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount(){
        const sum = this.items.reduce((preValue, curItem) => preValue + curItem.price, 0);
        return sum;
    }

    addProduct(product){
        const updateItems = [...this.items];
        updateItems.push(product);
        this.cartItems = updateItems;
        
    }

    render () {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML =`
        <h2>Total: \$${0}</h2>
        <button>Order Now</button>
        `;
        
        this.totalOutput = cartEl.querySelector('h2');

    }
}


class ProductItem extends Component{
    constructor(product, renderHookId){
        super(renderHookId);
        this.product = product;
    }

    addToCart(){
        App.addProductToCart(this.product);
    }

    render(){
        const prodEl = this.createRootElement('li','product-item');
            
            prodEl.innerHTML =`
            <div>
                <img src=" ${this.product.imageUrl}" alt="${this.product.title}">
            </div>
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
            `;
            const addCartButton = prodEl.querySelector('button');
            addCartButton.addEventListener('click', this.addToCart.bind(this));
            return prodEl;
            
    }
}

class ProductList extends Component{
    products =[
        new Product('Pillow','https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Djpgeco-Snuggle-1241878.', 19.99, 'A soft pillow'),

        new Product('Carpet','https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg', 89.99, 'A good stuff carpet'),
  
    ];

    constructor(renderHookId){
        super(renderHookId);
    }

    render(){
        this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
        
        for (const prod of this.products) {
            const productItem =new ProductItem(prod, 'prod-list');
            productItem.render();
        }
        

    }
}



class Shop{
    render(){
        this.cart = new ShoppingCart('app');
       this.cart.render();
        const productList = new ProductList('app');
        productList.render();
      
    }
}


class App{

    static cart;

    static init(){
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
       
    }

    static addProductToCart(product){
        this.cart.addProduct(product);

    }
}

App.init();     




