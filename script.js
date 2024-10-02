let products = [
    { id: 1, name: "Organic Tomatoes", description: "Fresh and organic tomatoes.", price: 50 },
    { id: 2, name: "Fresh Carrots", description: "Crunchy fresh carrots.", price: 30 },
    { id: 3, name: "Potatoes", description: "Quality potatoes.", price: 40 },
    { id: 4, name: "Cucumber", description: "Fresh, crunchy cucumber.", price: 25 },
    { id: 5, name: "Broccoli", description: "Healthy, organic broccoli.", price: 60 },
    { id: 6, name: "Capsicum", description: "Colorful and crispy capsicum.", price: 40 },
    { id: 7, name: "Eggplant (Brinjal)", description: "Fresh brinjals for your dishes.", price: 35 },
    { id: 8, name: "Spinach", description: "Organic and fresh spinach leaves.", price: 20 },
    { id: 9, name: "Kale", description: "Superfood kale for healthy meals.", price: 55 },
    { id: 10, name: "Zucchini", description: "Green zucchini for salads and cooking.", price: 45 },
    { id: 11, name: "Green Beans", description: "Fresh green beans, handpicked.", price: 30 },
    { id: 12, name: "Pumpkin", description: "Organic pumpkins for cooking.", price: 80 },
    { id: 13, name: "Sweet Corn", description: "Fresh sweet corn, ideal for boiling.", price: 50 },
    { id: 14, name: "Onions", description: "Essential red onions for every dish.", price: 30 },
    { id: 15, name: "Garlic", description: "Fresh garlic for seasoning.", price: 70 },
    { id: 16, name: "Cauliflower", description: "Organic cauliflower, perfect for cooking.", price: 50 },
    { id: 17, name: "Beetroot", description: "Fresh beetroots for salads.", price: 35 },
    { id: 18, name: "Cabbage", description: "Fresh, green cabbage.", price: 40 },
    { id: 19, name: "Radish", description: "Fresh, crunchy radishes.", price: 20 },
    { id: 20, name: "Lettuce", description: "Crisp lettuce, ideal for salads.", price: 25 },
    { id: 21, name: "Bell Peppers", description: "Vibrant, fresh bell peppers.", price: 55 },
    { id: 22, name: "Okra (Lady Finger)", description: "Fresh, green okra for cooking.", price: 35 },
    { id: 23, name: "Mushrooms", description: "Farm-fresh mushrooms.", price: 100 },
    { id: 24, name: "Chili Peppers", description: "Spicy green chili peppers.", price: 30 }
];
document.addEventListener("DOMContentLoaded", function () {
    fetchProducts();
});

function fetchProducts() {
    // Fetch products from backend (dummy data for now)
    let products = [
        { id: 1, name: "Organic Tomatoes", description: "Fresh and organic tomatoes.", price: 50 },
        { id: 2, name: "Fresh Carrots", description: "Crunchy fresh carrots.", price: 30 },
        { id: 3, name: "Potatoes", description: "Quality potatoes.", price: 40 },
        { id: 4, name: "Cucumber", description: "Fresh, crunchy cucumber.", price: 25 },
        { id: 5, name: "Broccoli", description: "Healthy, organic broccoli.", price: 60 },
        { id: 6, name: "Capsicum", description: "Colorful and crispy capsicum.", price: 40 },
        { id: 7, name: "Eggplant (Brinjal)", description: "Fresh brinjals for your dishes.", price: 35 },
        { id: 8, name: "Spinach", description: "Organic and fresh spinach leaves.", price: 20 },
        { id: 9, name: "Kale", description: "Superfood kale for healthy meals.", price: 55 },
        { id: 10, name: "Zucchini", description: "Green zucchini for salads and cooking.", price: 45 },
        { id: 11, name: "Green Beans", description: "Fresh green beans, handpicked.", price: 30 },
        { id: 12, name: "Pumpkin", description: "Organic pumpkins for cooking.", price: 80 },
        { id: 13, name: "Sweet Corn", description: "Fresh sweet corn, ideal for boiling.", price: 50 },
        { id: 14, name: "Onions", description: "Essential red onions for every dish.", price: 30 },
        { id: 15, name: "Garlic", description: "Fresh garlic for seasoning.", price: 70 },
        { id: 16, name: "Cauliflower", description: "Organic cauliflower, perfect for cooking.", price: 50 },
        { id: 17, name: "Beetroot", description: "Fresh beetroots for salads.", price: 35 },
        { id: 18, name: "Cabbage", description: "Fresh, green cabbage.", price: 40 },
        { id: 19, name: "Radish", description: "Fresh, crunchy radishes.", price: 20 },
        { id: 20, name: "Lettuce", description: "Crisp lettuce, ideal for salads.", price: 25 },
        { id: 21, name: "Bell Peppers", description: "Vibrant, fresh bell peppers.", price: 55 },
        { id: 22, name: "Okra (Lady Finger)", description: "Fresh, green okra for cooking.", price: 35 },
        { id: 23, name: "Mushrooms", description: "Farm-fresh mushrooms.", price: 100 },
        { id: 24, name: "Chili Peppers", description: "Spicy green chili peppers.", price: 30 }
    ];

    let productsList = document.getElementById("products-list");

    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    alert(`Product ${productId} added to cart`);
    // Implement cart logic
}

























document.addEventListener("DOMContentLoaded", function() {
    loadProducts();
});

function loadProducts() {
    let products = [
        { id: 1, name: "Organic Tomatoes", description: "Fresh and organic tomatoes.", price: 50 },
        { id: 2, name: "Fresh Carrots", description: "Crunchy fresh carrots.", price: 30 },
        { id: 3, name: "Potatoes", description: "Quality potatoes.", price: 40 },
        { id: 4, name: "Cucumber", description: "Fresh, crunchy cucumber.", price: 25 },
        { id: 5, name: "Broccoli", description: "Healthy, organic broccoli.", price: 60 },
        { id: 6, name: "Capsicum", description: "Colorful and crispy capsicum.", price: 40 },
        { id: 7, name: "Eggplant (Brinjal)", description: "Fresh brinjals for your dishes.", price: 35 },
        { id: 8, name: "Spinach", description: "Organic and fresh spinach leaves.", price: 20 },
        { id: 9, name: "Kale", description: "Superfood kale for healthy meals.", price: 55 },
        { id: 10, name: "Zucchini", description: "Green zucchini for salads and cooking.", price: 45 },
        { id: 11, name: "Green Beans", description: "Fresh green beans, handpicked.", price: 30 },
        { id: 12, name: "Pumpkin", description: "Organic pumpkins for cooking.", price: 80 },
        { id: 13, name: "Sweet Corn", description: "Fresh sweet corn, ideal for boiling.", price: 50 },
        { id: 14, name: "Onions", description: "Essential red onions for every dish.", price: 30 },
        { id: 15, name: "Garlic", description: "Fresh garlic for seasoning.", price: 70 },
        { id: 16, name: "Cauliflower", description: "Organic cauliflower, perfect for cooking.", price: 50 },
        { id: 17, name: "Beetroot", description: "Fresh beetroots for salads.", price: 35 },
        { id: 18, name: "Cabbage", description: "Fresh, green cabbage.", price: 40 },
        { id: 19, name: "Radish", description: "Fresh, crunchy radishes.", price: 20 },
        { id: 20, name: "Lettuce", description: "Crisp lettuce, ideal for salads.", price: 25 },
        { id: 21, name: "Bell Peppers", description: "Vibrant, fresh bell peppers.", price: 55 },
        { id: 22, name: "Okra (Lady Finger)", description: "Fresh, green okra for cooking.", price: 35 },
        { id: 23, name: "Mushrooms", description: "Farm-fresh mushrooms.", price: 100 },
        { id: 24, name: "Chili Peppers", description: "Spicy green chili peppers.", price: 30 }
    ];

    let productsContainer = document.getElementById("products-container");

    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;
        
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(productId, productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} added to cart`);
}
