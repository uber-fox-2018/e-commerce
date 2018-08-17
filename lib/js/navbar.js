Vue.component("navbar", {
	template: `
	<nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: #2bbcba;">
			<a class="navbar-brand" href="#">
				<img :src="logoUrl" height="30px">
			</a>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">

				<!-- nav bar category menu -->
				<navbar-category-menu :category-menu-data="navbarCategoryMenuData"></navbar-category-menu>

				<!-- nav bar shopping cart -->
				<navbar-shopping-cart :cartItems="cartItems"></navbar-shopping-cart>

				
				<form class="form-inline my-2 my-lg-0">
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text noborder" id="basic-addon1">
								<a style="-webkit-transform: rotate(-45deg); 
									-moz-transform: rotate(-45deg); 
									  -o-transform: rotate(-45deg);
										 transform: rotate(-45deg);
										 cursor: context-menu;">&#9906;</a>
							</span>
						</div>
						<input type="text" class="form-control noborder" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
					</div>

				</form>

			</div>
	</nav>

	`,
	data: function() {
		return {
			logoUrl: "./assets/img/AkhirBulan2.png",
			navbarCategoryMenuData: {
				name: "Mau ngapain hari ini?",
				categoryList: [
					{
						name: "Belanja!",
						link: "#"
					},
					{
						name: "Makan-Makan lah",
						link: "#"
					},
					{
						name: "Jalan-Jalan Dong !",
						link: "#"
					},
					{
						name: "Senang-Senang",
						link: "#"
					}
				]
			}
		};
	},
	props:["cartItems"]
});
