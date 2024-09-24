// Estrutura do carrinho
let cart = [];

// Função para adicionar produto ao carrinho
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cart.push(product);
        updateCartDisplay();
        alert(`${product.name} adicionado ao carrinho!`);
    }
}

// Função para remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    cartCount.textContent = cart.length; // Atualiza o contador do carrinho

    // Atualiza a lista de itens no carrinho
    cartItems.innerHTML = ''; // Limpa a lista atual
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeFromCart(item.id);
        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);
    });
}

// Função para exibir os produtos na página
function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>R$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productContainer.appendChild(productItem);
    });
}

// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log('JS carregado');
    // Suponha que `products` seja o array de produtos carregado do JSON
    fetch('/data/products.json')
        .then(response => response.json())
        .then(data => {
            products = data; // Armazena os produtos globalmente
            displayProducts(products); // Exibe os produtos na página
        });

    // Exibe o carrinho ao navegar
    const cartLink = document.getElementById('cart-link');
    cartLink.onclick = () => {
        updateCartDisplay();
    };
});
