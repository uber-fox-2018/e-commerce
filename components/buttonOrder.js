Vue.component('button-order', {
  template: `
    <button 
      @click="orderItem" 
      class="btn btn-danger">
      Beli Sekarang
    </button>
  `,
  props: ['propsButtonOrder'],
  data: function() {
    return {
      carts: [],
      cartTotal: 0
    }
  },
  methods: {
    orderItem: function() {
      this.carts.push(this.propsButtonOrder)
      // this.cartTotal += Number(this.propsButtonOrder.price)
      this.$emit('emitOrder', {
        carts: this.carts,
        cartTotal: this.cartTotal
      })
    },
  }
})