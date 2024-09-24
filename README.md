# Inteli-teste - Loja Online

**Inteli-teste** é uma loja online que vende produtos eletrônicos com integração de inteligência artificial. Este projeto foi desenvolvido utilizando Node.js, Express, EJS, e fornece uma experiência de compra interativa com um carrinho de compras e checkout.

## Funcionalidades

- Visualização de produtos com imagens, descrições e preços.
- Adição de produtos ao carrinho.
- Visualização e gerenciamento do carrinho de compras.
- Processo de checkout.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **EJS**: Motor de template para renderização de views.
- **CSS**: Para estilização e design responsivo.
- **HTML**: Estrutura básica das páginas.

## Estrutura do Projeto

/intelihome
│
├── /public
│   ├── /css
│   │   └── style.css
│   ├── /images
│   │   └── (imagens dos produtos e logotipo)
│   ├── /js
│   │   └── main.js
│   └── index.html
│
├── /routes
│   ├── cart.js
│   ├── checkout.js
│   └── products.js
│
├── /views
│   ├── cart.ejs
│   ├── checkout.ejs
│   ├── product.ejs
│   └── layout.ejs
│
├── /data
│   └── products.json
│
├── /controllers
│   ├── cartController.js
│   ├── checkoutController.js
│   └── productController.js
│
├── /models
│   └── productModel.js
│
├── server.js
└── package.json
