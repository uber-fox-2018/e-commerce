Vue.component("navbar-shopping-cart", {
	template: `
	<div>
		<div class="dropdown shoppingcart">
			<button type="button" class="btn dropdown-toggle shoppingcart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				&#x1F6D2;
				<span class="badge badge-danger">{{cartItems.length}}</span>
			</button>
			<div class="dropdown-menu cartViewer" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item">Total: {{cartItems.length}} Barang</a>
				<div class="dropdown-divider"></div>
				<ul class="nav flex-column">
					<div v-if="cartItems.length > 0">
						<li class="nav-item" v-for="cartA in cartItems.slice(0,5)">
							<a class="nav-link active" href="#">{{cartA.itemName}}</a>
						</li>
					</div>
					<li class="nav-item" v-else>
						<a class="nav-link active" href="#">Kamu Belum Belanja!</a>
					</li>
				</ul>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" data-toggle="modal" data-target="#CartModal">Lihat Keranjang</a>
			</div>
		</div>
		<div class="modal fade" id="CartModal" tabindex="1" role="dialog" aria-labelledby="CartModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content" style="border: none">
					<div class="modal-header">
						<h5 class="modal-title" id="CartModalLabel">Daftar Belanja</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<ul class="flex-column">
							<div v-if="cartItems.length > 0">
								<li class="nav-item" v-for="cartA in cartItems">
									<a class="nav-link active" href="#">{{cartA.itemName}}</a>
								</li>
							</div>
							<li class="nav-item" v-else>
								<a class="nav-link active" href="#">Kamu Belum Belanja!</a>
							</li>
						</ul>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" style="background-color: #2bbcba; border: none">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	`,
	props: ["cartItems"]
});
