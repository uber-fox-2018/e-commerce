<template>
  <div id="tableCheckout">
    <h3>Thank you for shopping with us!</h3>
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
        <tr v-for="(cart, index) in shopCart" v-bind:key="index">
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
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'checkout',
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'shopCart', 'totalQty', 'totalPrice'
    ])
  }
}
</script>

<style scoped>
#tableCheckout {
  width: 60%;
  margin-left: 20%;
  margin-top: 30px;
}
#img{
    width:70px;
  }
</style>
