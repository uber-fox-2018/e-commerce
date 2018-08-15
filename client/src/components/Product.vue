<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="(product,index) in allProducts" v-bind:key=index>
        <div class="card-deck">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" v-bind:src="product.imgUrl" alt="Card image cap" id="imgId">
            <div class="card-body">
              <h5 class="card-title">Rp. {{product.price}}</h5>
              <p class="card-text">{{product.name}}</p>
              <div style="float: right;">
                <i class="fas fa-minus-square" @click="decrease(product)"></i>
                <i style="margin: 10px;">{{product.qty}}</i>
                <i class="fas fa-plus-square mr-2" @click="increase(product)"></i>
                <i class="fas fa-shopping-cart" @click="addCart(product)"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'product',
  computed: {
    ...mapState([
      'allProducts'
    ])
  },
  methods: {
    ...mapActions([
      'increase', 'decrease', 'addCart'
    ])
  }
}
</script>

<style scoped>
  #count{
  width: 25px;
  height: 20px;
  text-align: center;
  border: 0px
  }

  #theProduct{
    margin-left: 120px;
    margin-top: 15px;
  }
  .card{
    margin-left: 15px;
    margin-bottom: 15px;
    display:flex;
    align-items:space-between;
    justify-content:space-between;
    flex-wrap:wrap;
    height: 420px;
  }
  .container{
    margin-top: 15px;
  }
  .card-text{
    text-align: left;
  }
  .card-title{
    text-align: left;
  }

</style>
