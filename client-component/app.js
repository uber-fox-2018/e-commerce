var vm = new Vue({
  el: '#app',
  data: {
    allProducts: '',
    productCategory: [],
    cart: [],
    seen: true,
    count: 0,
    totalPrice: 0 
  },
  mounted () {
    this.getAllProduct()
  },
  methods: {
    getAllProduct(){
      axios.get('http://localhost:3000/products')
      .then(products => {
        this.allProducts = products.data
      })
      .catch(err => {
        console.log(err.message)
      })
    },
    filterCategory(value){
      this.allProducts.forEach(element => {
        if(element.category === value){
          this.productCategory.push(element)
        }
      });
    },
    addCart(product){
      let status = false
      if (this.cart.length !== 0) {
        this.cart.forEach(element => {
          if (product.name === element.name) {
            element.qty += 1
            status = true
          }
        })
        if (!status) {
          this.cart.push(product)
          this.count++
        }
      } else {
        this.cart.push(product)
        this.count++
      }
    },
    decrease(product){
      if(product.qty > 1){
        product.qty--
      }
    },
    increase(product){
      product.qty++
    },
    logout(){

    }
  }
})