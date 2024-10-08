



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
        button.classList.add('custom-btn');  // Assuming custom button styling class exists
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

function showCategory(category) {
    const menuItems = {
        'coffee': ['Americano', 'Cafe Latte', 'Mocha', 'White Chocolate', 'Salted Caramel', 'Caramel Macchiato', 'Butter Scotch', 'Cafe Con Leche', 'Dirty Green Matcha','Dulce De Leche','Sea Salt Latte'],
        'non-coffee': ['Strawberry Latte', 'Chocolate Latte', 'Matcha Latte', 'Chocolate Strawberry Latte', 'Matcha Chocolate', 'Sea Salt Matcha'],
        'refreshers': ['Green Apple', 'Lychee', 'Kiwi', 'Passion Fruit', 'Pink Blossom'],
        'tea': ['Blue Citron', 'Blue Honey', 'Black Tea']
    };

    document.getElementById("coffee-non").style.display = "none";
    document.getElementById("refreshers-non").style.display = "none";

    let itemsDiv;
    
    if (category === 'coffee' || category === 'non-coffee') {
        document.getElementById("coffee-non").style.display = "";
        itemsDiv = document.getElementById("menu-items-coffee");
    } else if (category === 'refreshers' || category === 'tea') {
        document.getElementById("refreshers-non").style.display = "";
        itemsDiv = document.getElementById("menu-items-refreshers");
    }

    itemsDiv.innerHTML = "";

    menuItems[category].forEach(item => {
        let button = document.createElement("button");
        button.innerText = item;
        button.onclick = () => loadProduct(item, category);
        itemsDiv.appendChild(button);
    });

    itemsDiv.style.display = 'flex';
}

const productDescriptions = {
    'Americano': 'A simple, refreshing alternative to regular coffee for espresso lovers.',
    'Café Latte': 'A coffee beverage made by mixing espresso with milk. Known for its smooth and creamy taste.',
    'Cafe Mocha': 'Rich espresso, smooth chocolate syrup, and creamy milk for a refreshing treat.',
    'White Chocolate': 'Combines velvety white chocolate syrup with milk for a creamy drink.',
    'Caramel Macchiato': 'Bold espresso layered over creamy milk with rich caramel drizzle.',
    'Salted Caramel': 'Smooth caramel with a hint of saltiness, paired with rich espresso and creamy milk.',
    'Butterscotch': 'Buttery sweetness of butterscotch with smooth espresso and creamy milk.',
    'Cafe Con Leche': 'Bold espresso and creamy milk for a balance of rich, creamy flavor.',
    'Dulce De Leche': 'Homemade “Yema” mixed with creamy milk, perfect for a sweet tooth.',
    'Sea Salt Latte': 'Creamy foam with a blend of smooth espresso and creamy milk, elevated with sea salt.',
    'Dirty Green Matcha': 'Vibrant green matcha with a rich shot of espresso, blended with creamy milk.',
    'matcha latte': 'Vibrant matcha with creamy milk, sweetened for the sweet tooth.',
    'Strawberry Latte': 'Creamy milk and sweet strawberry syrup blend for a vibrant drink.',
    'Chocolate Latte': 'A creamy, smooth decadent chocolate drink.',
    'Chocolate Strawberry Latte': 'Creamy milk with strawberry syrup and rich chocolate for a fruity-chocolatey treat.',
    'Sea Salt Matcha': 'A salty drink with sweetness and creaminess from the sea salt foam.',
    'Green Apple': 'Crisp and tangy flavor of green apples in a fizzy, carbonated drink.',
    'Lychee': 'A sweet fizzy drink capturing the exotic sweetness of ripe lychees.',
    'Passion Fruit': 'A sparkling, fizzy drink with the vibrant tangy essence of passion fruit.',
    'Kiwi': 'Bittersweet fizzy drink with the bright and tangy flavor of ripe kiwi.',
    'Pink Blossom': 'Combines sakura petals, lychee syrup, and a creamy touch of yogurt for a sparkling blend.',
    'Blue Citron': 'A refreshing blend of honey citron ginger tea and vibrant blue tea.',
    'Blue Honey': 'Calming blue tea combined with the natural sweetness of honey.',
    'Black Tea': 'Rich black tea infused with fragrant notes of lychee syrup.'
};
function loadProduct(productName, category) {
    // Set product name correctly for both refreshers and others
    if (category === 'refreshers') {
        document.getElementById("product-name-refreshers").innerText = productName; // Correct ID for refreshers
        document.getElementById("product-description-refreshers").innerText = productDescriptions[productName] || ''; // Set description for refreshers
    } else {
        document.getElementById("product-name").innerText = productName; // Use general ID for others
        document.getElementById("product-description-coffee").innerText = productDescriptions[productName] || ''; // Set description for coffee/non-coffee
    }

    // Show Syrup section for Refreshers
    if (category === 'refreshers') {
        document.getElementById("extras-section").style.display = "none";
        document.getElementById("syrup-section").style.display = "";
    } 
    // Show Extras section for Tea
    else if (category === 'tea') {
        document.getElementById("syrup-section").style.display = "none";
        document.getElementById("extras-section").style.display = "";
    } 
    // Show both for Coffee and Non-Coffee
    else {
        document.getElementById("syrup-section").style.display = "";
        document.getElementById("extras-section").style.display = "";
    }
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

// Select all buttons inside .category-menu
const buttons = document.querySelectorAll('.category-menu button');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'clicked' class from all buttons (optional if you want only one button to stay clicked)
        buttons.forEach(btn => btn.classList.remove('clicked'));
        
        // Add the 'clicked' class to the clicked button
        this.classList.add('clicked');
    });
});
