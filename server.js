const express = require('express');
const session = require('express-session');
const path = require('path');

// Importando controladores
const productController = require('./controllers/productController');
const cartController = require('./controllers/cartController'); // Ajuste o caminho conforme necessário
const checkoutController = require('./controllers/checkoutController'); // Ajuste o caminho conforme necessário

const app = express();

// Middleware para interpretar dados do corpo da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração de sessões
app.use(session({
    secret: 'seu_segredo_aqui', // Coloque um segredo seguro
    resave: false,
    saveUninitialized: true,
}));

// Configuração para servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do motor de visualização (EJS)
app.set('view engine', 'ejs');

// Rotas
app.use('/products', productController); // Rota para produtos
app.use('/cart', cartController); // Rota para carrinho
app.use('/checkout', checkoutController); // Rota para checkout

// Rota inicial (pode ser uma página inicial)
app.get('/', (req, res) => {
    res.render('index', { title: 'Bem-vindo à Intelihome' }); // Renderiza a página inicial
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
