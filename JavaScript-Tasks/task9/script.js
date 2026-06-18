let products = [];
let cart = [];

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const cartCount = document.getElementById("cartCount");
const loading = document.getElementById("loading");
const cartItems = document.getElementById("cartItems");
const viewCartBtn = document.getElementById("viewCartBtn");

// USD to INR Conversion Rate
const INR_RATE = 85;

fetch("https://fakestoreapi.com/products")
.then(response => response.json())

.then(data => {

    products = data;

    displayProducts(products);

    productStatistics(products);

})

.catch(error => {

    console.log(error);

    loading.innerText = "Failed To Load Products";

})

.finally(() => {

    loading.innerText = "Products Loaded Successfully";

    setTimeout(() => {

        loading.style.display = "none";

    },1500);

});

function displayProducts(data){

    productContainer.innerHTML = "";

    data.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}">
            
            <h3>${product.title}</h3>
            
            <p>
                <strong>
                    ₹${(product.price * INR_RATE).toLocaleString("en-IN")}
                </strong>
            </p>

            <p>${product.category}</p>

            <p>⭐ ${product.rating.rate}</p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>
        `;

        productContainer.appendChild(card);

    });

}

function addToCart(id){

    const product = products.find(item => item.id === id);

    cart.push(product);

    cartCount.innerText = cart.length;

    displayCart();

}

function removeFromCart(id){

    cart = cart.filter(item => item.id !== id);

    cartCount.innerText = cart.length;

    displayCart();

}

function displayCart(){

    cartItems.innerHTML = "<h2>🛒 Shopping Cart</h2>";

    cart.forEach(item => {

        cartItems.innerHTML += `
            <div class="cart-card">

                <img src="${item.image}">

                <div>

                    <h4>${item.title}</h4>

                    <p>
                        ₹${(item.price * INR_RATE).toLocaleString("en-IN")}
                    </p>

                </div>

                <button onclick="removeFromCart(${item.id})">
                    Remove
                </button>

            </div>
        `;

    });

    const total = cart.reduce((sum,item) =>

        sum + (item.price * INR_RATE)

    ,0);

    cartItems.innerHTML += `
        <div class="total">
            Total Price : ₹${total.toLocaleString("en-IN")}
        </div>
    `;

}

viewCartBtn.addEventListener("click", () => {

    if(cartItems.style.display === "block"){

        cartItems.style.display = "none";

        viewCartBtn.innerText = "View Cart";

    }
    else{

        cartItems.style.display = "block";

        viewCartBtn.innerText = "Hide Cart";

    }

});

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>

        product.title.toLowerCase().includes(value)

    );

    displayProducts(filteredProducts);

});

categorySelect.addEventListener("change", () => {

    const category = categorySelect.value;

    if(category === "all"){

        displayProducts(products);

        return;

    }

    const filteredProducts = products.filter(product =>

        product.category === category

    );

    displayProducts(filteredProducts);

});

function productStatistics(data){

    document.getElementById("totalProducts").innerText =
    data.length;

    const totalPrice = data.reduce((sum,item) =>

        sum + item.price

    ,0);

    const avgPrice = (totalPrice * INR_RATE) / data.length;

    document.getElementById("avgPrice").innerText =
    "₹" + avgPrice.toLocaleString("en-IN",{
        maximumFractionDigits:0
    });

    const sortedProducts = [...data].sort((a,b)=>

        a.price - b.price

    );

    document.getElementById("lowPrice").innerText =
    `₹${(sortedProducts[0].price * INR_RATE).toLocaleString("en-IN")}`;

    document.getElementById("highPrice").innerText =
    `₹${(sortedProducts[sortedProducts.length - 1].price * INR_RATE).toLocaleString("en-IN")}`;

}