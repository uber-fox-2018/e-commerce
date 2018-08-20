Vue.component('modal-cart',{
    template :`
    <div>
      
    <div class="modal fade" id="modalCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart">
                  <td>{{item.name}}</td>
                  <td>{{item.price}}</td>
                  <td>{{item.qty}}</td>
                </tr>
              </tbody>
            </table>
            <br>
            <div v-if="cart.length">

            <div>
                Total Price :
                {{ total }}

            </div>
        </div>
        <div v-else="v-else">
            no items in the cart
        </div>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary"  data-dismiss="modal">Add Item</button>
        </div>
        
      </div>
      
    </div>
   
  </div>
  </div>
    `,
    props : ["cart","total"],
    methods :{
     
    }
})