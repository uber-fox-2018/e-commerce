import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopCart: [],
    totalQty: 0,
    totalPrice: 0,
    allProducts: [
      {
        name: 'Red - Style Long Plain Shirt Long Sleeve',
        price: 230000,
        imgSource: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/1/25/1874792/1874792_1510edbb-3b6e-4983-9bab-2ba4892ea43c_920_920.jpg',
        category: 'Shirt',
        qty: 1
      },
      {
        name: 'Pink - Style Long Plain Shirt Long Sleeve',
        price: 230000,
        imgSource: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/1/25/1874792/1874792_f8a8e306-7266-4015-bfff-dcc422f5c68c_805_805.jpg',
        category: 'Shirt',
        qty: 1
      },
      {
        name: 'Red - Style Long Plain Shirt Long Sleeve',
        price: 230000,
        imgSource: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/1/25/1874792/1874792_a685a89d-9fd0-4fbb-9634-b584d157a739_800_800.jpg',
        category: 'Shirt',
        qty: 1
      },
      {
        name: 'Women Party Sexy Floral Pattern',
        price: 650000,
        imgSource: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/24/282135682/282135682_127c92c1-1974-4ca0-af91-9efb061a8e13_700_700.jpg',
        category: 'Dress',
        qty: 1
      },
      {
        name: 'Cocktail Party Dress Flower',
        price: 450000,
        imgSource: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/10/11/150920425/150920425_ce83e4a3-f39d-4fa8-b95a-92d5dc18a252_750_778.jpg',
        category: 'Dress',
        qty: 1
      },
      {
        name: 'Dress premium wanita/Party - Red',
        price: 450000,
        imgSource: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/15/0/0_d864ea6b-7bf9-4eab-ad64-167fe4145b4f_800_800.jpg',
        category: 'Dress',
        qty: 1
      },
      {
        name: 'Maroon - Coat Jaket Wanita Modis Stylist Trendy',
        price: 1110000,
        imgSource: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/31/36778148/36778148_85496144-6584-42c7-b7f7-bc638ff83821_640_640.jpg',
        category: 'Coat',
        qty: 1
      },
      {
        name: 'Blue - Coat Jaket Wanita Modis Stylist Trendy',
        price: 1110000,
        imgSource: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/31/36778148/36778148_cba7da29-128d-4dc3-9872-bdad3f6fa069_700_700.jpg',
        category: 'Coat',
        qty: 1
      }
    ]
  },
  mutations: {

  },
  actions: {
    increase (context, payload) {
      payload.qty++
    },
    decrease (context, payload) {
      if (payload.qty > 0) {
        payload.qty--
      } else {
        payload.qty = 0
      }
    },
    addCart (context, payload) {
      this.state.totalQty += payload.qty
      this.state.totalPrice += payload.price
      if (payload.qty !== undefined) {
        if (this.state.shopCart.length !== 0) {
          this.state.shopCart.forEach(element => {
            if (payload.name === element.name) {
              element.qty += 1
            } else {
              this.state.shopCart.push(payload)
            }
          })
        } else {
          this.state.shopCart.push(payload)
        }
      } else {
        alert('Minimum quantity 1')
      }
    }
  }
})
