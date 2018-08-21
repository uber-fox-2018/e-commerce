Vue.component("mid-carousel-component", {
	template: `
	<div class="container">
            <br>
						<h4 class="text-center">Hot Items!</h4>
						<button class="btn btn-primary" data-toggle="modal" data-target="#add_item_view">Add Item</button>
						<button @click="showAll" class="btn btn-primary">See All Items</button>
            <hr>
            <div class="row">
                <div class="col-md-4" v-for="product in products">
                    <figure class="card card-product">
                        <div class="img-wrap">
                            <img v-bind:src="product.image">
                        </div>
                        <figcaption class="info-wrap">
                            <h4 class="title">{{product.name}}</h4>
                            <p class="desc">{{product.description}}</p>
                            <div class="rating-wrap">
                                <div class="label-rating">{{product.reviews}} reviews</div>
                                <div class="label-rating">{{product.orders}} orders </div>
                            </div>
                        </figcaption>
                        <div class="bottom-wrap">
                            <a href="" v-show="auth" v-on:click="getDetails(product)" class="btn btn-sm btn-primary float-right" data-toggle="modal" data-target="#product_view">Order</a>
                            <div class="price-wrap h5">
                                <span class="price-new">{{product.price}}</span>
                                <del class="price-old">{{product.listPrice}}</del>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
		
		
		<div class="modal fade product_view" id="product_view">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <a href="#" data-dismiss="modal" class="class pull-right">
              <span class="glyphicon glyphicon-remove"></span>
            </a>
            <h3 class="modal-title">Product Details</h3>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6 product_img">
                <img v-bind:src="selectedItem.image" class="img-responsive">
              </div>
              <div class="col-md-6 product_content">
                <h4>{{selectedItem.name}}</h4>
                <h5>Product Id:
                  <span>{{selectedItem.id}}</span>
                </h5>
                <div class="rating">
                  <span class="glyphicon glyphicon-star"></span>
                  <span class="glyphicon glyphicon-star"></span>
                  <span class="glyphicon glyphicon-star"></span>
                  <span class="glyphicon glyphicon-star"></span>
                  <span class="glyphicon glyphicon-star"></span>
                  ({{selectedItem.reviews}} reviews)
                </div>
                <p>{{selectedItem.description}}</p>
                <h3 class="cost">
                  <span class="glyphicon glyphicon-usd"></span> {{selectedItem.price}}
                  <small class="pre-cost">
                    <span class="glyphicon glyphicon-usd"></span> {{selectedItem.listPrice}}</small>
                </h3>
                <div class="row">
                  <div class="col-md-4 col-sm-12">
                    <input v-model.number="selectedItem.qty" class="form-control" type="number" name="qty" placeholder="qty" min="0" step="1" required>
                  </div>
                  <!-- end col -->
                </div>
                <div class="space-ten"></div>
                <div class="btn-ground">
                  <button @click="buyItem" type="button" class="btn btn-primary" data-dismiss="modal">
                    <span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                  <button type="button" class="btn btn-primary">
                    <span class="glyphicon glyphicon-heart"></span> Add To Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	</div>
	
	<div class="modal fade cart_view" id="add_item_view">
		<div class="modal-dialog" style="right:100px">
      <div class="modal-content">
				<div class="modal-header">
					<div class="container">
						<div class="modal-body">
							<div class="row">
								<div class="col-md-6 col-sm-12">
									<form>
										<div class="row">
                    		<input v-model="name" class="form-control" type="text" name="name" placeholder="name">	
										</div>
										<br>
										<div class="row">
                    		<input v-model="description" class="form-control" type="text" name="description" placeholder="description">	
										</div>
										<br>
										<div class="row">
                    		<input v-model="price" class="form-control" type="number" name="price" placeholder="price" min="0" step="5000">	
										</div>
										<br>
										<div class="row">
                    		<input v-model="image" class="form-control" type="text" name="image" placeholder="image url">	
										</div>
										<br>
										<button @click="newItem" class="btn btn-primary" data-dismiss="modal">Submit</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	
		`,

	data() {
		return {
			auth: false,
			products: [
				{
					id: 1,
					name: "Steam Iron",
					description:
						"With over 300 steam holes, this iron delivers powerful steam that makes the process of steaming out wrinkles smooth and fast",
					listPrice: 1000000,
					price: 500000,
					reviews: 100,
					orders: 100,
					image: "./images/items/1.jpg"
				},
				{
					id: 2,
					name: "Stand Mixer",
					description:
						"10-speed slide control ranges from a very fast whip to a very slow stir",
					listPrice: 2000000,
					price: 1000000,
					reviews: 100,
					orders: 100,
					image: "./images/items/2.jpg"
				},
				{
					id: 3,
					name: "Prada Bag",
					description:
						"Shopping Tote Bag with adjustable / detatchable shoulder strap",
					listPrice: 3000000,
					price: 1000000,
					reviews: 100,
					orders: 100,
					image: "./images/items/3.jpg"
				},
				{
					id: 4,
					name: "Samsung Galaxy Note8",
					description: "6.3 Dual edge super AMOLED Quad HD+ display",
					listPrice: 7000000,
					price: 5000000,
					reviews: 100,
					orders: 100,
					image: "./images/items/4.jpg"
				},
				{
					id: 5,
					name: "Sofa",
					description:
						"Exceptional comfort with high performance fabric for heavy wear",
					listPrice: 5000000,
					price: 3000000,
					reviews: 100,
					orders: 100,
					image: "./images/items/5.jpg"
				},
				{
					id: 6,
					name: "Single Sofa",
					description:
						"made of solid wood frame and soft sponge, linen fabric cover make this chair durable，can serve you for long time",
					listPrice: 3000000,
					price: 2000000,
					reviews: 100,
					orders: 100,
					image: "./images/items/6.jpg"
				}
			],
			selectedItem: {},
			cart: [],
			total: 0,
			name:"",
			description:"",
			price:0,
			image:""

		};
	},
	methods: {
		showAll(){
			axios({
				method: "GET",
				url:"http://localhost:3000/api/items",
				headers:{
					token : localStorage.getItem('token')
				}
			})
			.then(res=>{
				console.log(res.data.items)
				for(let item of res.data.items){
					this.products.push(item)
					console.log(item)
				}
			

			})
		},
		newItem(){
			axios({
				method: "POST",
				url:"http://localhost:3000/api/items",
				data:{
					name: this.name,
					description : this.desc,
					price : this.price,
					image: this.image
				},
				headers:{
					token : localStorage.getItem('token')
				}
			})
			.then(res=>{
				this.products.push(res.data.newItem)
			})
			.catch(err=>{
				console.log(err)
			})
		},
		getDetails: function(item) {
			this.selectedItem = Object.assign({ qty: 1 }, item);
		},

		buyItem: function() {
			let found = false;
			const order = {
				name: this.selectedItem.name,
				id: this.selectedItem.id,
				image: this.selectedItem.image,
				price: this.selectedItem.price,
				qty: this.selectedItem.qty
			};

			for (var i = 0; i < this.cart.length; i++) {
				if (this.cart[i].id === this.selectedItem.id) {
					found = true;
					this.cart[i].qty = this.cart[i].qty + this.selectedItem.qty;
				}
			}
			if (!found) {
				this.cart.push(order);
				this.$emit("add-cart", this.cart);
			}
		}
	},
	addItems() {},
	computed: {
		totalPrice: function() {
			var total = this.cart.reduce(function(akumulator, product) {
				return akumulator + product.price * product.qty;
			}, 0);
			return total;
		}
	},
	mounted() {
		let token = localStorage.getItem("token");
		if (token) {
			this.auth = true;
		}
	}
});
