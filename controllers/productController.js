const express = require('express');
const router = express.Router();

// Simulação de produtos (normalmente, isso viria de um banco de dados)
const products = [
    { id: 1, name: 'Produto A', description: 'Descrição do Produto A', price: 99.99, image: '/images/produto-a.jpg' },
    { id: 2, name: 'Produto B', description: 'Descrição do Produto B', price: 149.99, image: '/images/produto-b.jpg' },
    { id: 3, name: 'Produto C', description: 'Descrição do Produto C', price: 199.99, image: '/images/produto-c.jpg' },
    // Adicione mais produtos conforme necessário
];

// Rota para exibir a página de produtos
router.get('/', (req, res) => {
    const cartCount = req.session.cart ? req.session.cart.length : 0; // Contagem de itens no carrinho
    res.render('product', { products, cartCount }); // Renderiza a página com produtos e contagem do carrinho
});

// Rota para adicionar um produto ao carrinho
router.post('/add', (req, res) => {
    const productId = parseInt(req.body.productId); // Obtém o ID do produto do corpo da requisição
    const product = products.find(item => item.id === productId); // Encontra o produto no array

    if (product) {
        // Inicializa o carrinho na sessão se não existir
        if (!req.session.cart) {
            req.session.cart = [];
        }
        req.session.cart.push(product); // Adiciona o produto ao carrinho na sessão
        res.redirect('/products'); // Redireciona para a página de produtos
    } else {
        res.status(404).send('Produto não encontrado');
    }
});

module.exports = router;
