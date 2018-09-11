Vue.component("ecommerce-content", {
	template: `
	<div class="container">
		<div class="row side_image">
			<div id="carouselExampleControls" class="col-lg-6 col-md-6 carousel slide" data-ride="carousel" data-interval="3000">
				<ol class="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
				</ol>
				<div class="carousel-inner col-lg-6">
					<div class="carousel-item active">
						<img class="d-block w-100" src="https://source.unsplash.com/N_Y88TWmGwA/1000x600" alt="First slide">
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="https://source.unsplash.com/Fzde_6ITjkw/1000x600" alt="Second slide">
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="https://source.unsplash.com/D4jRahaUaIc/1000x600" alt="Third slide">

					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="https://source.unsplash.com/UfRLtAHHaP8/1000x600" alt="Third slide">
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
			<div class="col-lg-6 col-md-6">
				<div class="row side_image">
					<div class="col-lg-6 col-md-12">
						<img src="https://source.unsplash.com/G4ZjuxOFD8Y/1000x600" class="img-fluid centered-and-cropped" alt="Responsive image">
					</div>
					<div class="col-lg-6 col-md-12">
						<button class="button" type="button" data-hover="Kamu, iya kamu" data-active="I'M ACTIVE">
							<span> Ada yang Gajian? </span>
						</button>
					</div>
				</div>
				<div class="row side_image">
					<div class="col-lg-6 col-md-12">
						<button class="button" type="button" data-hover="Mau Tahu?" data-active="I'M ACTIVE">
							<span>Paket Jalan + Makan ? </span>
						</button>
					</div>
					<div class="col-lg-6 col-md-12">
						<img src="https://source.unsplash.com/PMxT0XtQ--A/1000x600" class="img-fluid centered-and-cropped" alt="Responsive image">
					</div>

				</div>
			</div>

		</div>

	</div>
	<div class="container">
		<div v-for="productCats in frontPageItems">
			<div class="produkTitle">
				<a>{{ productCats.name }}</a>
			</div>
			<div class="row sellItems">

				<div class="items card col-lg-2 col-md-4" v-for="(item, index) in productCats.itemList">

					<img class="card-img-top centered-and-cropped" v-bind:src="item.imgurl" v-bind:alt="item.itemName">
					<div class="card-body">
						<p class="card-text">
							<a class="itemName">{{ item.itemName }}</a>
							<br>
							<a class="store">{{ item.store }}</a>
							<br>
							<a class="price">
								{{ priceFormater(item.price) }}
							</a>
							<br>
							<a class="availblity">{{ item.availibility }}</a>

						</p>

					</div>
					<button type="button" class="btn btn-primary" v-on:click="addToCart(productCats.name,index)" style="background-color: #2bbcba; border:none">+</button>
				</div>
			</div>
		</div>
	</div>
	`,
	methods:{
		priceFormater:function(price){
			
		}
	}
});
