function initializeCart() {
    const cartItems = document.querySelectorAll('.item');

    cartItems.forEach(item => {
        const quantityInput = item.querySelector('input[type="text"]');
        const plusButton = item.querySelector('.plus-btn');
        const minusButton = item.querySelector('.minus-btn');
        const deleteButton = item.querySelector('.delete-btn');
        const likeButton = item.querySelector('.like-btn');

        plusButton.addEventListener('click', function() {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });

        minusButton.addEventListener('click', function() {
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
            }
        });
        deleteButton.addEventListener('click', function() {
            item.remove();
        });

        likeButton.addEventListener('click', function() {
            likeButton.classList.toggle('is-active');
        });
    });
}

initializeCart();