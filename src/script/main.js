const productsCardRecentlyViewed = document.querySelector(
	'.products-card-recently-viewed'
);
const productsCardBestSelling = document.querySelector(
	'.products-card-best-selling'
);
const cartStatus = document.querySelector('#cart-status');
const cartButton = document.querySelector('#cart-button');

let cart = {};
let products = [];

function updateCartStatus() {
	if (
		Object.keys(cart).length == 0 &&
		cartStatus.classList.contains('cart-filled')
	) {
		cartStatus.classList.remove('cart-filled');
	} else if (
		Object.keys(cart).length != 0 &&
		!cartStatus.classList.contains('cart-filled')
	) {
		cartStatus.classList.add('cart-filled');
	}
}

function updateCartTitle() {
	let cartTitleText = '';
	if (Object.keys(cart).length === 0) {
		cartTitleText = 'Cart is Empty';
	} else {
		let totalPrice = 0;
		let totalCount = 0;
		for (let key in cart) {
			let product = products.find((product) => product.id == key);
			const productTotalPrice = product.price * cart[key];
			cartTitleText += `\n${product.productName} x ${cart[key]} = ₹ ${productTotalPrice}`;
			totalPrice += productTotalPrice;
			totalCount += cart[key];
		}
		cartTitleText += `\nTotal = ₹ ${totalPrice} for ${totalCount} items`;
	}
	cartButton.setAttribute('title', cartTitleText);
}

fetch('./products.json')
	.then((response) => response.json())
	.then((data) => {
		products = data;
		products.forEach((product) => {
			const productCard = document.createElement('div');
			productCard.classList.add('product-card');
			productCard.classList.add('group');
			productCard.id = product.id;
			likeImageURL =
				product.isLiked == true
					? './src/icons/heart_filled.svg'
					: './src/icons/heart_empty.svg';
			const productCard2 = document.createElement('div');
			productCard2.classList.add('product-card');
			productCard2.classList.add('group');
			productCard2.id = product.id;

			let insideHTML = `
	<div class="product-top">`;

			if (product.highlightText != '')
				insideHTML += `
		<div class="product-highlight">${product.highlightText}
		</div>`;

			insideHTML += `
		<img class="product-like-btn" src="${likeImageURL}" alt="Like Product Button">
		<img class="product-img" src="${product.imageURL}" alt="">
	</div>
	<div class="product-bottom">
		<div class="rating-info">
			<div>
				<img src="./src/icons/rating.svg" alt="">
				<div>${product.rating}</div>
			</div>
			<div>(${product.ratingCount})</div>
		</div>
		<h3 class="long-text product-name">${product.productName}</h3>
		<div class="product-meta">
			<div class="long-text manufacturer-name">${product.manufacturerName}</div>
			<div class="product-footer">
				<div class="price-info">
					<div class="price-primary">₹ ${product.price}</div>
				`;
			if (product.price != product.oldPrice) {
				const discount = Math.floor(
					((product.oldPrice - product.price) / product.oldPrice) *
						100
				);
				insideHTML += `
					<div class="price-secondary">
							<div>₹ ${product.oldPrice}</div>
							<div>${discount}% off</div>
					</div>
					`;
			}
			insideHTML += `
				</div>
			</div>
		</div>
		<div class="product-action">
        	<div class="add-to-cart-btn">
            	Add to Cart
        	</div>
    	</div>
	</div>`;

			productCard.innerHTML = insideHTML;
			productCard2.innerHTML = insideHTML;
			productsCardBestSelling.appendChild(productCard);
			productsCardRecentlyViewed.appendChild(productCard2);
		});

		const likeButtons = document.querySelectorAll('.product-like-btn');
		likeButtons.forEach((button) => {
			button.addEventListener('click', () => {
				const isLiked =
					button.getAttribute('src') ===
					'./src/icons/heart_filled.svg';
				if (isLiked) {
					// backend code here
					button.setAttribute('src', './src/icons/heart_empty.svg');
				} else {
					// backend code here
					button.setAttribute('src', './src/icons/heart_filled.svg');
				}
			});
		});

		const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

		addToCartButtons.forEach((button) => {
			button.addEventListener('click', () => {
				const id =
					button.parentElement.parentElement.parentElement
						.parentElement.id;
				if (cart[id] > 0) {
					cart[id]++;
				} else {
					cart[id] = 1;
				}
				updateCartStatus();
				updateCartTitle();
			});
		});

		// ==========================
	});
