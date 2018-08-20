Vue.component("cart-component", {
	template: `
    <div class="modal fade cart_view" id="cart_view">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <a href="#" data-dismiss="modal" class="class pull-right">
            <span class="glyphicon glyphicon-remove"></span>
          </a>
          <h3 v-if="cart.length" class="modal-title">
            <a href="#">Check Out</a>
          </h3>
          <h2 v-else>No items in the cart</h2>
        </div>
        <div class="container">
          <div v-for="(order, index) in cart" class="modal-body">
            <div class="card">
              <table class="table table-hover shopping-cart-wrap">
                <thead class="text-muted">
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col" width="120">Quantity</th>
                    <th scope="col" width="120">Price</th>
                    <th scope="col" width="200" class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <figure class="media">
                        <img v-bind:src="order.img" class="img-thumbnail img-sm">
                        <figcaption class="media-body">
                          <h6 class="title text-truncate">{{order.name}}</h6>
                          <dl class="param param-inline small">
                            <dt>Qty: </dt>
                            <dd>{{order.qty}}</dd>

                          </dl>
                        </figcaption>
                      </figure>
                    </td>
                    <td>
                      <input class="form-control" type="number" name="qty" placeholder="0" min="0" step="1" v-model.number="order.qty" required>
                    </td>
                    <td>
                      <div class="price-wrap">
                        <var class="price">Rp {{subTotal(order)}}</var>
                        <small class="text-muted">(Rp {{order.price}} each)</small>
                      </div>
                      <!-- price-wrap .// -->
                    </td>
                    <td class="text-right">
                      <a href="#" class="btn btn-outline-danger" v-on:click="removeItem(index)"> × Remove</a>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th v-if="cart.length" class="text-muted">
                      TOTAL PRICE : {{ totalPrice }}
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- card.// -->
          </div>
          <!--container end.//-->
        </div>
      </div>
    </div>
  </div>
    `,
	data() {
		return {
		
		};
  },
  props: ['cart'],
	methods: {
		subTotal: function(item) {
			return item.price * item.qty;
		},

		removeItem: function(index) {
			this.cart.splice(index, 1);
		}
	},
	computed: {
		totalPrice: function() {
			var total = this.cart.reduce(function(akumulator, product) {
				return akumulator + product.price * product.qty;
			}, 0);
			return total;
		}
  },

  updated() {
    console.log(this.cart)
  }
});
