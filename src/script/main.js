const likeButtons = document.querySelectorAll('.product-like-btn');

likeButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const isLiked =
			button.getAttribute('src') === './src/icons/heart_filled.svg';
		if (isLiked) {
			// backend code here
			button.setAttribute('src', './src/icons/heart_empty.svg');
		} else {
			// backend code here
			button.setAttribute('src', './src/icons/heart_filled.svg');
		}
	});
});
