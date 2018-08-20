Vue.component('products', {
  props: ['allproducts', 'productcategory', 'showcat'],
  methods: {
    decrease(product){
      this.$emit('prodec', product)
    },
    increase(product){
      this.$emit('proinc', product)
    },
    addCart(product){
      this.$emit('addcart', product)
    }
  },
  template: `
  <div>
    <div class="row" style="width:80%;margin-left:10%" v-if="showcat">
      <div class="col-md-3" v-for="(product, index) in allproducts">
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

    <div class="row" style="width:80%;margin-left:10%" v-else>
      <div class="col-md-3" v-for="(product, index) in productcategory">
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
  `
})