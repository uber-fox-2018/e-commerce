Vue.component('food-list-card', {
  template: `
    <div id="container-cards" class="row">
      <div v-for="food in foods" id="container-foods-cards" class="mt-2 mx-5 col-md-3">
        <div class="card border-dark mb-3 row center mx-3" style="max-width: 18rem;">
          <div class="card-header col-md-12 mx-auto">
            <h4>{{ food.name }}</h4>
          </div>
          <div class="card-body text-dark col-md-12">
            <img class="card-image-center mx-auto" v-bind:src="food.img" alt="" style="height: 200px; width: 250px;">
            <p class="card-text">Price: {{ convertMoney(food.price) }}</p>
            <div v-if="food.qty === 0">
              <p class="card-text">Qty Left: Empty Stock</p>
            </div>
            <div v-else>
              <p class="card-text">Qty Left: {{ food.qty }}</p>
            </div>
            <p class="card-text"></p>{{ food.description }}
            <br>
            <div v-if="food.qty">
              <button v-on:click="buyItem(food)" class="btn btn-outline-primary my-2 my-sm-0" type="button"
                data-toggle="modal" data-target="#modalBuyItems" @click="openModal(food)">
                Buy
              </button>
            </div>
            <div v-else>
              <button v-on:click="buyItem(food)" class="btn btn-outline-primary my-2 my-sm-0 disabled" type="button"
                data-toggle="modal">
                Buy
              </button>
            </div>
          </div>
        </div>
        </div>
       <!-- <div class="modal fade" id="modalBuyItems" tabindex="-1" role="dialog" aria-labelledby="modalBuyItemsLabel" aria-hidden="true">
          <modal-items :modalItem="modalState"></modal-items> -->
        </div>
    </div>
  `,
  data: function() {
    return {
      modalState: '',
      itemBuy: '',
    }
  },
  props: ['foods'],
  methods: {
    convertMoney: function (price) {
      return `Rp. ${price.toLocaleString()}`
    },
    openModal: function(food) {
      this.modalState = food
    },
    buyItem: function (item) {
      this.notes = ''
      this.buyQty = 0
      let addItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        category: item.category
      }
      this.itemBuy = addItem
    },
  }
})