<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Your Shopping Cart</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
               <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(cart, index) in shopCart" v-bind:key="index">
                        <td><img v-bind:src="cart.imgUrl" id="img"></td>
                        <td>{{cart.name}}</td>
                        <td>{{cart.qty}}</td>
                        <td>{{cart.price}}</td>
                        <td>{{cart.price * cart.qty}}</td>
                        </tr>
                    </tbody>
                    <tr>
                        <td>Total Shopping Card</td>
                        <td></td>
                        <td>{{totalQty}}</td>
                        <td></td>
                        <td>{{totalPrice}}</td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="btnCheckout">Checkout</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'forModal',
  computed: {
    ...mapState([
      'shopCart', 'totalQty', 'totalPrice'
    ])
  }
}
</script>

<style scoped>
  #img{
    width:70px;
  }
  #btnCheckout{
    background-color:green;
    border: 1px solid green;
  }
</style>
