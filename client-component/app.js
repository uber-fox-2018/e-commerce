var vm = new Vue({
  el: '#app',
  data: {
    allProducts: '',
    productCategory: [],
    cart: [],
    seen: true,
    count: 0,
    totalPrice: 0,
    url: '',
    productEdit: ''
  },
  mounted () {
    this.getAllProduct()
    let token = localStorage.getItem('token')
    if(token){
      this.seen = false
    }
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
            this.totalPrice = element.qty * element.price
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
      localStorage.clear()
      window.location="index.html"
    },
    login(input){
      axios.post('http://localhost:3000/users/login', {
        email: input.email,
        password: input.password
      })
      .then(userLogin => {
        if(userLogin.data.isAdmin === true){
          window.location="upload.html"
          localStorage.setItem('isAdmin', userLogin.data.isAdmin)
          localStorage.setItem('name', userLogin.data.name)
          localStorage.setItem('token', userLogin.data.token)
        } else {
          window.location="index.html"
          localStorage.setItem('name', userLogin.data.name)
          localStorage.setItem('token', userLogin.data.token)
        }
        
      })
      .catch(err => {
        console.log(err.message)
      })
    },
    getImage (file) {
      this.url = file.target.files[0]
    },
    uploadToGcp(input){
      let formData = new FormData()
      formData.append('image', this.url)
      axios.post('http://localhost:3000/products/upload', formData)
      .then(result => {
        axios.post('http://localhost:3000/products/uploadProduct', {
          name: input.name,
          category: input.category,
          price: input.price,
          imgUrl: result.data.link
        })
          .then(newProduct => {
            alert('Successfully add new product')
            window.location='index.html'
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteProduct(input){
      axios.delete(`http://localhost:3000/products/delete/${input}`)
      .then(delProduct => {
        alert('Deleted!')
        window.location='upload.html'
      })
      .catch(err => {
        alert(err.message)
      })
    },
    edit(input){
      axios.put(`http://localhost:3000/products/edit/${input.id}`, {
        name: input.name,
        price: input.price,
        category: input.category,
        imgUrl: input.imgUrl
      })
      .then(updatePro => {
        alert('Edited!')
      })
      .catch(err => {
        alert(err.message)
      })
    },
    forEdit(input){
      console.log(input)
      this.productEdit = input
    }
  }
})