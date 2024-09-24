const express = require('express');
const router = express.Router();

// Simulação de um armazenamento de carrinho na memória
let cart = [];

// Rota para exibir o carrinho
router.get('/', (req, res) => {
    // Renderiza a página do carrinho e passa os itens do carrinho
    res.render('cart', { cart });
});

// Rota para adicionar um produto ao carrinho
router.post('/add', (req, res) => {
    const productId = parseInt(req.body.productId); // Obtém o ID do produto do corpo da requisição
    const product = products.find(item => item.id === productId); // Encontre o produto no array

    if (product) {
        cart.push(product); // Adiciona o produto ao carrinho
        res.redirect('/cart'); // Redireciona para a página do carrinho
    } else {
        res.status(404).send('Produto não encontrado');
    }
});

// Rota para remover um produto do carrinho
router.post('/remove', (req, res) => {
    const productId = parseInt(req.body.productId); // Obtém o ID do produto a ser removido
    cart = cart.filter(item => item.id !== productId); // Filtra o carrinho para remover o produto
    res.redirect('/cart'); // Redireciona para a página do carrinho
});

// Rota para finalizar a compra
router.post('/checkout', (req, res) => {
    if (cart.length === 0) {
        return res.status(400).send('Carrinho vazio, adicione produtos antes de finalizar a compra.');
    }
    
    // Aqui você pode implementar a lógica de pagamento ou redirecionar para uma página de confirmação
    // Por enquanto, vamos limpar o carrinho após a "compra"
    cart = []; // Limpa o carrinho
    res.send('Compra finalizada com sucesso!'); // Mensagem de sucesso
});

module.exports = router;
