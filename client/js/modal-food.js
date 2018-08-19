Vue.component('modal-items', {
  template: `
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Buy Item</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                  </tr>
                </thead>
                <tbody>
                  <td>{{ itemBuy.id }}</td>
                  <td>{{ itemBuy.name }}</td>
                  <td>{{ convertMoney(totalPrice(itemBuy.price)) }}</td>
                  <td>
                    <i class="fas fa-minus-circle"></i>
                    <input v-model="buyQty" type="number" name="qty" style="text-align: center" placeholder="qty" min="0">
                    <i class="fas fa-plus-circle"></i>
                  </td>
                </tbody>
              </table>
            </div>
            <div class="form-group">
              <label class="col-form-label">Notes:</label>
              <textarea v-model="notes" class="form-control" id="description-text"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addItemToCart()" data-dismiss="modal">Buy</button>
          </div>
        </div>
      </div>
  `,
  data: function() {
    return {
      carts: [],
      buyQty: 0,
      notes: '',
    }
  },

  props: ['modalItem', 'buyItem'],
  methods: {
    addItemToCart: function () {
      this.buyItem.qty = Number(this.buyQty)
      this.buyItem.notes = this.notes
      this.buyItem.totalPrice = this.buyItem.qty * this.buyItem.price
      this.carts.push(this.buyItem)
      this.notes = ''
      this.buyQty = 0
    },
  },

})