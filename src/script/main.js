const productsCard = document.querySelector('.products-card');

// FETCHING PRODUCTS FROM JSON FILE
let products = [];
fetch('https://everythingshyam.github.io/the-office-store/products.json')
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
			let insideHTML = `
				<div class="product-top">
					<img class="product-like-btn" src="${likeImageURL}" alt="Like Product Button">
					<img class="product-img" src="${product.imageURL}" alt="">
				</div>
				<div class="product-meta">
					<div class="rating-info">
						<div>
							<img src="./src/icons/rating.svg" alt="">
							<div>${product.rating}</div>
						</div>
						<div>(${product.ratingCount})</div>
					</div>
					<h3 class="long-text">${product.productName}</h3>
					<div class="long-text">${product.manufacturerName}</div>
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
						<div class="product-action">
                            <div>
								<div class="decrease-count action-button">
									<img src="./src/icons/decrease-from-cart.svg" alt="">
								</div>
								<div class="count action-button">0</div>
								<div class="increase-count action-button">
									<img src="./src/icons/increase-to-cart.svg" alt="">
								</div>
							</div>
                        </div>
					</div>
				</div>
			`;
			productCard.innerHTML = insideHTML;
			productsCard.appendChild(productCard);
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

		const decreaseButtons = document.querySelectorAll('.decrease-count');
		const increaseButtons = document.querySelectorAll('.increase-count');

		decreaseButtons.forEach((button) => {
			button.addEventListener('mouseover', () => {
				button.children[0].setAttribute(
					'src',
					'./src/icons/decrease-from-cart-primary.svg'
				);
			});
			button.addEventListener('mouseout', () => {
				button.children[0].setAttribute(
					'src',
					'./src/icons/decrease-from-cart.svg'
				);
			});
			button.addEventListener('click', () => {
				const count = button.nextElementSibling;
				if (count.innerHTML > 0) {
					count.innerHTML = parseInt(count.innerHTML) - 1;
				}
			});
		});

		increaseButtons.forEach((button) => {
			button.addEventListener('mouseover', () => {
				button.children[0].setAttribute(
					'src',
					'./src/icons/increase-to-cart-primary.svg'
				);
			});
			button.addEventListener('mouseout', () => {
				button.children[0].setAttribute(
					'src',
					'./src/icons/increase-to-cart.svg'
				);
			});
			button.addEventListener('click', () => {
				const count = button.previousElementSibling;
				count.innerHTML = parseInt(count.innerHTML) + 1;
			});
		});
		// ==========================
	});
