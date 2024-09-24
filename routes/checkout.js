function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    // Aqui você pode implementar a lógica de pagamento ou redirecionar para uma página de checkout
    alert('Redirecionando para o checkout...');
    // Redireciona para a página de checkout
    window.location.href = '/checkout';
}
