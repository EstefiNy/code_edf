document.addEventListener('DOMContentLoaded', function () {
    const galleryWrapper = document.querySelector('.gallery');
    const images = document.querySelectorAll('.cookie-gallery img');
    
    let index = 0;

    images.forEach((image, i) => {
        image.addEventListener('click', () => {
            index = (index + 1) % images.length;
            const offset = -index * (images[0].clientWidth + 20); // 20px é o gap entre imagens
            galleryWrapper.style.transform = `translateX(${offset}px)`;
        });
    });

    // Inicialização do carrinho
    let cartCount = 0;
    const cartDisplay = document.getElementById('cart-display');
    const cartButton = document.getElementById('cart-button');
    const orderForm = document.getElementById('order-form');

    // Manipulação dos botões "Adicionar ao Carrinho"
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            cartCount++;
            cartDisplay.textContent = `Carrinho: ${cartCount} itens`;

            // Exibe o formulário de pedido se o carrinho tiver itens
            if (cartCount > 0) {
                orderForm.style.display = 'block';
            }
        });
    });

    // Manipulação do botão "Ver Carrinho"
    cartButton.addEventListener('click', function () {
        orderForm.style.display = 'block';
    });

    // Manipulação do formulário de pedido
    document.getElementById('submit-order').addEventListener('click', function (e) {
        e.preventDefault(); // Evita o envio do formulário para fins de exemplo
        alert('Pedido enviado!');
        // Redefine o estado do carrinho e esconde o formulário após envio
        cartCount = 0;
        cartDisplay.textContent = `Carrinho: ${cartCount} itens`;
        orderForm.style.display = 'none';
    });
});