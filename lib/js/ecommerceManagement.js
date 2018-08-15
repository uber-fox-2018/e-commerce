Vue.component("ecommerceManagement", {
	template: `
		<navbar :cartItems="cart"></navbar>

		
		<ecommerceFooter :footerLicense="footerLicense"></ecommerceFooter>
	`,
	data: function() {
		return {
			footerLicense:"2018 &#169; PT. Generasi SuperMie",
			cart: [],
			frontPageItems: [
				{
					name: "Produk Baru",
					itemList: [
						{
							itemName: "Topi",
							store: "The Hats Store",
							price: 50000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/vU2MmvDCmUo/1000x600"
						},
						{
							itemName: "Jaket",
							store: "The Jacket Store",
							price: 50000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?men-wearing-jacket"
						},
						{
							itemName: "Sepatu Hak Tinggi",
							store: "The Heels Store",
							price: 300000,
							availibility: "Masih tersedia",
							imgurl:
								"https://source.unsplash.com/1000x600/?women-high-heels-sitting-down"
						},
						{
							itemName: "Perhiasan",
							store: "The Jewellry Store",
							price: 300000000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?jewellery"
						},
						{
							itemName: "Laptop",
							store: "The Laptop Store",
							price: 3000000000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?laptop"
						},
						{
							itemName: "Hats",
							store: "The Hats Store",
							price: 50000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?hat,hats"
						},
						{
							itemName: "Kacamata",
							store: "The Kacamata Store",
							price: 50000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?glasses"
						},
						{
							itemName: "Lilin",
							store: "The candle Store",
							price: 50000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?candle"
						}
					]
				},
				{
					name: "Paket Liburan",
					itemList: [
						{
							itemName: "Bali",
							store: "Bali United",
							price: 10000000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?bali"
						},
						{
							itemName: "Paris",
							store: "Oh Paris, I'm love",
							price: 15000000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?paris"
						},
						{
							itemName: "Lost in Madrid",
							store: "Le Madrid",
							price: 30000000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?madrid"
						},
						{
							itemName: "Italy : Eat, love, Pray",
							store: "Bene la Pierre",
							price: 5000000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?italy"
						},
						{
							itemName: "Flamenco of Spain",
							store: "La bonita",
							price: 40000000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?spain"
						},
						{
							itemName: "Liburan ke Pantai",
							store: "Seribu pulau",
							price: 1000000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?beach"
						},
						{
							itemName: "Naik Naik Gunung",
							store: "Hikers Merbabu",
							price: 1200000,
							availibility: "Masih tersedia",
							imgurl: "https://source.unsplash.com/1000x600/?mountain"
						}
					]
				}
			]
		};
	},
	methods:{
		addItemToCart:function(itemObj){
			this.cart.push(itemObj);
		}
	}
});
