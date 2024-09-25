



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


function showCategoryFood(category) {
    const menuItems = {
        'pastry': ['Ny Style Biscoff', 'Oreo', 'NY Levain', 'Matcha'],
        'pasta': ['Chicken Alfredo', 'Chicken Pomodoro'],
        'rice':  ['Paella', 'Chicken Pops'],
         'appetizers':  ['Nachos', 'French Fries', 'Parmesan Potato Chips'],
          'burger':  ['Cheesy Burger', 'Classic Burger','Dynamite Burger','Chicken Popeyes']
    };

    // Hide both sections initially
    document.getElementById("food").style.display = "";
    document.getElementById("menu-items-food").style.display = "";

    // Clear and populate menu items based on the category
    let     itemsDiv = document.getElementById("menu-items-food");
    

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

function showOrder(category) {
    const menuItems = {
        'pending': ['#0001', '#0002', '#0003', '#0004'],
        'complete': ['#0001', '#0002', '#0003', '#0004'],
        'history':  ['#0001', '#0002', '#0003', '#0004'],
    };

    // Hide both sections initially
    document.getElementById("order").style.display = "";
    document.getElementById("menu-items-order").style.display = "";

    // Clear and populate menu items based on the category
    let itemsDiv = document.getElementById("menu-items-order");
    
    // Clear previous items
    itemsDiv.innerHTML = "";

    // Create and append the h2 element for the order number
    let orderNumberHeading = document.createElement("h2");
    orderNumberHeading.innerText = "Order Number"; // Set the text for the h2
    orderNumberHeading.style.color = "white";       // Set text color to white
    orderNumberHeading.style.textAlign = "center";   // Center the text
    itemsDiv.appendChild(orderNumberHeading); // Append the h2 to the itemsDiv

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