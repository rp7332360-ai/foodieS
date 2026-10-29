const foodItems = [
    { id: 1, name: "Shahi Paneer", category: "Khana", price: 250, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Rajma Chawal", category: "Khana", price: 150, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Butter Naan", category: "Khana", price: 40, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Paneer Tikka", category: "Khana", price: 220, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Veg Biryani", category: "Khana", price: 180, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Chole Bhature", category: "Khana", price: 130, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 7, name: "Masala Dosa", category: "Khana", price: 120, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80" },
    { id: 8, name: "Hakka Noodles", category: "Khana", price: 160, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" },
    { id: 9, name: "Veg Burger", category: "Khana", price: 90, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "Cheese Pizza", category: "Khana", price: 290, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" },
    { id: 11, name: "White Sauce Pasta", category: "Khana", price: 210, img: "https://images.unsplash.com/photo-1621996346565-e3d5d6281298?auto=format&fit=crop&w=500&q=80" },
    { id: 12, name: "Dal Makhani", category: "Khana", price: 200, img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80" },
    { id: 13, name: "Veg Momos", category: "Khana", price: 100, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80" },
    { id: 14, name: "French Fries", category: "Khana", price: 110, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80" },
    { id: 15, name: "Kadai Paneer", category: "Khana", price: 240, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80" },
    { id: 16, name: "Mix Veg", category: "Khana", price: 170, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80" },
    { id: 17, name: "Aloo Paratha", category: "Khana", price: 70, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 18, name: "Paneer Paratha", category: "Khana", price: 90, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 19, name: "Garlic Naan", category: "Khana", price: 50, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
    { id: 20, name: "Tandoori Roti", category: "Khana", price: 20, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" },
    { id: 21, name: "Malai Kofta", category: "Khana", price: 230, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80" },
    { id: 22, name: "Jeera Rice", category: "Khana", price: 110, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 23, name: "Plain Rice", category: "Khana", price: 90, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 24, name: "Pav Bhaji", category: "Khana", price: 140, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 25, name: "Spring Rolls", category: "Khana", price: 150, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80" },
    { id: 26, name: "Manchurian Dry", category: "Khana", price: 170, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" },
    { id: 27, name: "Fried Rice", category: "Khana", price: 150, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80" },
    { id: 28, name: "Red Sauce Pasta", category: "Khana", price: 210, img: "https://images.unsplash.com/photo-1621996346565-e3d5d6281298?auto=format&fit=crop&w=500&q=80" },
    { id: 29, name: "Paneer Pizza", category: "Khana", price: 310, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" },
    { id: 30, name: "Corn Pizza", category: "Khana", price: 260, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" },
    { id: 31, name: "Cheese Burger", category: "Khana", price: 120, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
    { id: 32, name: "Paneer Burger", category: "Khana", price: 140, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
    { id: 33, name: "Plain Dosa", category: "Khana", price: 100, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80" },
    { id: 34, name: "Paneer Dosa", category: "Khana", price: 160, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80" },
    { id: 35, name: "Idli Sambar", category: "Khana", price: 90, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80" },
    { id: 36, name: "Vada Sambar", category: "Khana", price: 100, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80" },
    { id: 37, name: "Pani Puri", category: "Khana", price: 50, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 38, name: "Bhel Puri", category: "Khana", price: 60, img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80" },
    { id: 39, name: "Sev Tamatar", category: "Khana", price: 160, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80" },
    { id: 40, name: "Bhindi Masala", category: "Khana", price: 150, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80" },
    { id: 41, name: "Aloo Jeera", category: "Khana", price: 120, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80" },
    { id: 42, name: "Palak Paneer", category: "Khana", price: 230, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80" },
    { id: 43, name: "Matar Paneer", category: "Khana", price: 220, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=80" },
    { id: 44, name: "Malai Chaap", category: "Khana", price: 200, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },
    { id: 45, name: "Masala Chaap", category: "Khana", price: 190, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80" },

    { id: 46, name: "Classic Cold Coffee", category: "Drinks", price: 120, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" },
    { id: 47, name: "Cold Coffee with Ice Cream", category: "Drinks", price: 160, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 48, name: "Chocolate Cold Coffee", category: "Drinks", price: 150, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" },
    { id: 49, name: "Caramel Cold Coffee", category: "Drinks", price: 170, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" },
    { id: 50, name: "Hazelnut Cold Coffee", category: "Drinks", price: 180, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" },
    { id: 51, name: "Hot Cappuccino", category: "Drinks", price: 110, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80" },
    { id: 52, name: "Hot Cafe Latte", category: "Drinks", price: 120, img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80" },
    { id: 53, name: "Hot Chocolate", category: "Drinks", price: 140, img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=500&q=80" },
    { id: 54, name: "Mango Shake", category: "Drinks", price: 130, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80" },
    { id: 55, name: "Banana Shake", category: "Drinks", price: 110, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80" },
    { id: 56, name: "Oreo Shake", category: "Drinks", price: 150, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 57, name: "KitKat Shake", category: "Drinks", price: 160, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { id: 58, name: "Strawberry Shake", category: "Drinks", price: 130, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80" },
    { id: 59, name: "Butterscotch Shake", category: "Drinks", price: 140, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80" },
    { id: 60, name: "Fresh Lime Soda", category: "Drinks", price: 70, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },
    { id: 61, name: "Virgin Mojito", category: "Drinks", price: 110, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },
    { id: 62, name: "Blue Lagoon Mocktail", category: "Drinks", price: 120, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },
    { id: 63, name: "Mint Cooler", category: "Drinks", price: 100, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },
    { id: 64, name: "Peach Iced Tea", category: "Drinks", price: 110, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },
    { id: 65, name: "Lemon Iced Tea", category: "Drinks", price: 100, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80" },
    { id: 66, name: "Sweet Lassi", category: "Drinks", price: 80, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80" },
    { id: 67, name: "Salted Chaas", category: "Drinks", price: 50, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80" },
    { id: 68, name: "Badam Milk", category: "Drinks", price: 90, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80" },
    { id: 69, name: "Pineapple Juice", category: "Drinks", price: 100, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80" },
    { id: 70, name: "Watermelon Juice", category: "Drinks", price: 90, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80" },
    { id: 71, name: "Mixed Fruit Juice", category: "Drinks", price: 110, img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80" },
    { id: 72, name: "Green Tea", category: "Drinks", price: 60, img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80" },

    { id: 73, name: "Gulab Jamun (2 Pcs)", category: "Dessert", price: 80, img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80" },
    { id: 74, name: "Rasgulla (2 Pcs)", category: "Dessert", price: 70, img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=500&q=80" },
    { id: 75, name: "Vanilla Ice Cream", category: "Dessert", price: 90, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80" },
    { id: 76, name: "Chocolate Ice Cream", category: "Dessert", price: 110, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80" },
    { id: 77, name: "Butterscotch Ice Cream", category: "Dessert", price: 120, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80" },
    { id: 78, name: "Black Forest Pastry", category: "Dessert", price: 100, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
    { id: 79, name: "Chocolate Brownie", category: "Dessert", price: 130, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },
    { id: 80, name: "Brownie with Ice Cream", category: "Dessert", price: 180, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },
    { id: 81, name: "Rasmalai (2 Pcs)", category: "Dessert", price: 120, img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=500&q=80" },
    { id: 82, name: "Jalebi (Plate)", category: "Dessert", price: 90, img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80" },
    { id: 83, name: "Gajar ka Halwa", category: "Dessert", price: 140, img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80" },
    { id: 84, name: "Moong Dal Halwa", category: "Dessert", price: 150, img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80" },
    { id: 85, name: "Kheer", category: "Dessert", price: 100, img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=500&q=80" },
    { id: 86, name: "Red Velvet Pastry", category: "Dessert", price: 130, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
    { id: 87, name: "Tiramisu Slice", category: "Dessert", price: 160, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
    { id: 88, name: "Choco Lava Cake", category: "Dessert", price: 140, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },
    { id: 89, name: "Strawberry Cheesecake", category: "Dessert", price: 190, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80" },
    { id: 90, name: "Blueberry Cheesecake", category: "Dessert", price: 200, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80" },
    { id: 91, name: "Fruit Salad with Cream", category: "Dessert", price: 130, img: "https://images.unsplash.com/photo-1519996521430-025f91754118?auto=format&fit=crop&w=500&q=80" },
    { id: 92, name: "Shahi Tukda", category: "Dessert", price: 120, img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80" },
    { id: 93, name: "Rabri Falooda", category: "Dessert", price: 150, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80" },
    { id: 94, name: "Kulfi Falooda", category: "Dessert", price: 140, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80" },
    { id: 95, name: "Mango Kulfi", category: "Dessert", price: 90, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80" },
    { id: 96, name: "Pista Kulfi", category: "Dessert", price: 90, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80" },
    { id: 97, name: "Pineapple Pastry", category: "Dessert", price: 90, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
    { id: 98, name: "Donut (Chocolate)", category: "Dessert", price: 110, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80" },
    { id: 99, name: "Waffle with Nutella", category: "Dessert", price: 180, img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=500&q=80" },
    { id: 100, name: "Apple Pie", category: "Dessert", price: 160, img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=500&q=80" }
];

let cart = [];

function renderFoodGrid(itemsToRender) {
    const foodGrid = document.getElementById('foodGrid');
    if (!foodGrid) return;
    foodGrid.innerHTML = '';
    
    itemsToRender.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('food-card');
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="food-img">
            <div class="food-details">
                <span class="food-category-tag">${item.category}</span>
                <div class="food-title">${item.name}</div>
                <div class="food-footer">
                    <span class="food-price">₹${item.price}</span>
                    <button class="add-to-cart" onclick="addToCart(${item.id}, this)">Add</button>
                </div>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

if (document.getElementById('foodGrid')) {
    renderFoodGrid(foodItems);
}

function filterCategory(category) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const titleElem = document.getElementById('categoryTitle');
    if (category === 'all') {
        titleElem.innerText = "Our Menu (100 Items)";
        renderFoodGrid(foodItems);
    } else {
        const filtered = foodItems.filter(item => item.category === category);
        titleElem.innerText = `${category} Items (${filtered.length})`;
        renderFoodGrid(filtered);
    }
}

function addToCart(id, btn) {
    const item = foodItems.find(f => f.id === id);
    const existing = cart.find(c => c.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    btn.innerText = "✓";
    btn.classList.add('added');
    setTimeout(() => {
        btn.innerText = "Add";
        btn.classList.remove('added');
    }, 1000);

    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) return;
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.innerText = totalItems;

    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotalPrice = document.getElementById('cartTotalPrice');

    if (cart.length === 0) {
        cartItemsList.innerHTML = `<p style="text-align: center; color: #a4b0be;">Your cart is empty.</p>`;
        cartTotalPrice.innerText = "₹0";
        return;
    }

    let html = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        html += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>₹${item.price} x ${item.qty}</small>
                </div>
                <div>
                    <button onclick="changeQty(${item.id}, -1)" style="padding:2px 6px;">-</button>
                    <span style="margin: 0 4px;">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)" style="padding:2px 6px;">+</button>
                </div>
            </div>
        `;
    });
    cartItemsList.innerHTML = html;
    cartTotalPrice.innerText = `₹${total}`;
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(c => c.id !== id);
        }
    }
    updateCartUI();
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function fetchLocation() {
    const locText = document.getElementById('locationText');
    if (navigator.geolocation) {
        locText.innerText = "Fetching...";
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                    const data = await response.json();
                    const address = data.address.city || data.address.town || data.address.village || data.address.state_district || "Current Location";
                    locText.innerText = address;
                } catch (error) {
                    locText.innerText = `Lat:${lat.toFixed(1)}, Lon:${lon.toFixed(1)}`;
                }
            },
            (error) => {
                locText.innerText = "Location Denied";
            }
        );
    } else {
        locText.innerText = "Not Supported";
    }
}

function goToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    window.location.href = 'checkout.html';
}
function confirmPay() {
    // Yeh code checkout section ko chhupa dega aur receipt section ko dikha dega
    document.getElementById("checkoutSection").style.display = "none";
    document.getElementById("receiptSection").style.display = "block";
}

function selectMode(mode) {
    const confirmButton = document.getElementById("confirmBtn");

    if (mode === 'Counter') {
        // Jab Pay on counter select ho
        confirmButton.innerText = "Confirm Order";
    } else if (mode === 'UPI') {
        // Jab Direct UPI select ho
        confirmButton.innerText = "Confirm Order & Pay";
    }
}