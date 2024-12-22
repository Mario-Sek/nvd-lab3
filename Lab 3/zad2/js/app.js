const products = [
	{ id: 1, title: 'LenovoThinkpad x280', price: 1000.00, qty: 1, image: './img/ThinkPad_x280.png' },
	{ id: 2, title: 'Apple Macbook Pro', price: 2500.00, qty: 1, image: './img/MacBook-Pro.png' },
	{ id: 3, title: 'Amazon Kindle Ebook', price: 150.00, qty: 1, image: './img/Amazon_Kindle.png' },
	{ id: 4, title: 'USB-C to HDMI cable', price: 10.00, qty: 1, image: './img/usbC_to_hdmi.jpg' },
];

const { createApp } = Vue;

createApp({
	data() {
		return {
			products,
			cartItems: []
		};
	},
	computed: {
		cartTotal() {
			return this.cartItems.reduce((total, item) => total + item.price * item.qty, 0);
		}
	},
	methods: {
		formatCurrency(value) {
			return value.toFixed(2);
		},
		addToCart(product) {
			const existingItem = this.cartItems.find(item => item.id === product.id);
			if (existingItem) {
				existingItem.qty += product.qty;
			} else {
				this.cartItems.push({ ...product });
			}
			product.qty = 1;
		},
		removeItem(index) {
			this.cartItems.splice(index, 1);
		}
	}
}).mount('#app');
