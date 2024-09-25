



let shots = 1;
let quantity = 1;
let pricePerItem = 100; 
let totalPrice = 100;

// Redirect functions
function redirectToLogo() {
    window.location.href = "logo.html";
}

function redirectToProfile() {
    window.location.href = "user-profile.html";
}

// Adjust shots
function adjustShots(value) {
    shots += value;
    if (shots < 1) shots = 1;
    document.getElementById("shots-count").innerText = shots;
    calculateTotal();
}

// Adjust quantity
function adjustQuantity(value) {
    quantity += value;
    if (quantity < 1) quantity = 1;
    document.getElementById("quantity-count").innerText = quantity;
    calculateTotal();
}

// Calculate total price
function calculateTotal() {
    totalPrice = pricePerItem * quantity;
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}

// Show menu categories
function showCategory(category) {
    const menuItems = {
        'coffee': ['Americano', 'Cafe Latte', 'Mocha', 'White Chocolate', 'Salted Caramel', 'Caramel Macchiato', 'Butter Scotch', 'Cafe Con Leche', 'Dirty Green Matcha'],
        'non-coffee': ['Strawberry Latte', 'Chocolate Latte', 'Matcha Latte', 'Chocolate Strawberry Latte', 'Matcha Chocolate', 'Sea Salt Matcha'],
        'refreshers': ['Green Apple', 'Lychee', 'Kiwi', 'Passion Fruit', 'Pink Blossom'],
        'tea': ['Blue Citron', 'Blue Honey', 'Black Tea']
    };

    // Hide both sections initially
    document.getElementById("coffee-non").style.display = "none";
    document.getElementById("refreshers-non").style.display = "none";

    // Clear and populate menu items based on the category
    let itemsDiv;
    
    if (category === 'coffee' || category === 'non-coffee') {
        document.getElementById("coffee-non").style.display = "";
        itemsDiv = document.getElementById("menu-items-coffee");
    } else if (category === 'refreshers' || category === 'tea') {
        document.getElementById("refreshers-non").style.display = "";
        itemsDiv = document.getElementById("menu-items-refreshers");
    }

    // Clear previous items
    itemsDiv.innerHTML = "";

    // Populate menu items
    menuItems[category].forEach(item => {
        let button = document.createElement("button");
        button.innerText = item;
        button.onclick = () => loadProduct(item);
        itemsDiv.appendChild(button);
    });

    itemsDiv.style.display = 'flex'; // Show the items
}



// Load product details
function loadProduct(productName) {
    document.getElementById("product-name").innerText = productName;
    // You can add more logic here to load specific product details
}

// Milk selection
function setMilk(type) {
    console.log("Milk type:", type);
    // You can add more functionality for milk selection
}

// Syrup selection
function selectSyrup(syrup) {
    console.log("Selected syrup:", syrup);
    // You can add more functionality for syrup selection
}

// Place order
function placeOrder() {
    alert("Order placed successfully!");
}