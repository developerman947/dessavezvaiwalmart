// Dados dos produtos
const products = [
    {
        id: 1,
        name: "Smart TV LED 50\" 4K UHD",
        price: 2399,
        image: "https://m.media-amazon.com/images/I/71WUdj4X1VL._AC_SL1500_.jpg",
        discount: 20,
        rating: 4.5
    },
    {
        id: 2,
        name: "Notebook Dell i7 16GB 512GB SSD",
        price: 4299,
        image: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
        rating: 4
    },
    {
        id: 3,
        name: "Smartphone Samsung Galaxy S21",
        price: 2974,
        image: "https://m.media-amazon.com/images/I/61L5QgPvgxL._AC_SL1500_.jpg",
        discount: 15,
        rating: 5
    },
    {
        id: 4,
        name: "Fone Bluetooth Sony WH-1000XM4",
        price: 1599,
        image: "https://m.media-amazon.com/images/I/71Y1S1m-QAL._AC_SL1500_.jpg",
        rating: 5
    },
    {
        id: 5,
        name: "Console PlayStation 5",
        price: 3499,
        image: "https://m.media-amazon.com/images/I/51VhVRfLQaL._AC_SL1000_.jpg",
        rating: 5
    },
    {
        id: 6,
        name: "Câmera Canon EOS Rebel T7",
        price: 2199,
        image: "https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SL1500_.jpg",
        discount: 10,
        rating: 4.5
    }
];

// Carrinho de compras
let cart = [];

// Elementos do DOM
const productGrid = document.querySelector('.product-grid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.querySelector('.cart-count');
const cartTotal = document.getElementById('cartTotal');

// Renderizar produtos
function renderProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let discountBadge = '';
        if (product.discount) {
            discountBadge = `<div class="discount-badge">-${product.discount}%</div>`;
        }
        
        // Criar estrelas de avaliação
        let stars = '';
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        for (let i = 0; i < 5 - Math.ceil(product.rating); i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${discountBadge}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${stars}
                </div>
                <div class="product-price">
                    ${product.discount ? 
                        `<span class="original-price">R$ ${(product.price / (1 - product.discount/100)).toFixed(2)}</span>` : 
                        ''}
                    R$ ${product.price.toFixed(2)}
                </div>
                <button class="add-to-cart
