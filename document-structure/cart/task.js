let productQuantityControls = document.querySelectorAll('.product__quantity-controls');
let productQuantityValue = document.querySelectorAll('.product__quantity-value');
let buttonProductAdd = document.querySelectorAll('.product__add');
let cart = document.querySelector('.cart__products');
let cartCart = document.querySelector('.cart');

if(!cartCart.querySelector('.cart__product')) {
    cartCart.classList.add('cart-hidden');
}

productQuantityControls.forEach((productQuantityControl) => {
    let productQuantityControlParent = productQuantityControl.parentElement;

    productQuantityControl.onclick = function(event) {
        if(event.target.classList.contains('product__quantity-control_inc')) {
            productQuantityControlParent.querySelector('.product__quantity-value').textContent++;
        }

        if(event.target.classList.contains('product__quantity-control_dec')) {            
            if(Number(productQuantityControlParent.querySelector('.product__quantity-value').textContent) === 1) {
                return;
            }

            productQuantityControlParent.querySelector('.product__quantity-value').textContent--;
        }
    }
})


buttonProductAdd.forEach((button) => {
    button.onclick = function() {
        let buttonParent = button.parentElement.parentElement.parentElement;   // кликнутый product
        let currentProductQuantity = Number(buttonParent.querySelector('.product__quantity-value').textContent);  // количество кликнутого товара
       
        if(cart.querySelector(`[data-id="${buttonParent.dataset.id}"]`)) { // дописать в конспект ипотом разобрать синтаксис
            let existingProduct = cart.querySelector(`[data-id="${buttonParent.dataset.id}"]`);   // товар в корзине
            let existingProductQuantityElement = existingProduct.querySelector('.cart__product-count');
            let existingProductQuantity = Number(existingProductQuantityElement.textContent);   //количество товара в корзине
            
            existingProductQuantityElement.textContent = existingProductQuantity + currentProductQuantity;
        } else {
            cart.insertAdjacentHTML(
                'afterbegin',
                `<div class="cart__product" data-id="${buttonParent.dataset.id}">
                <img class="cart__product-image" src="${buttonParent.querySelector('.product__image').src}">
                <div class="cart__product-count">${buttonParent.querySelector('.product__quantity-value').textContent}</div>
                <a href="#" class="delete">×</a>
                </div>`
            )
        }

        if(cartCart.querySelector('.cart__product')) {
            cartCart.classList.remove('cart-hidden');
        }

        let deleteButtons = cart.querySelectorAll('.delete');
        
        deleteButtons.forEach((deleteButton) => {
            deleteButton.onclick = function() {
                let deleteProduct = deleteButton.parentElement;
                deleteProduct.remove();

                if(!cartCart.querySelector('.cart__product')) {
                    cartCart.classList.add('cart-hidden');
                }
            }            
        })
    }
})