let vm = new Vue({
  el: '#app',
  data (){
    return {
      searchBy: '',
      seen: true,
      count: 0,
      email: '',
      password: '',
      productName: '',
      price: '',
      url: '',
      category: '',
      allProducts: '',
      productcategory: '',
      showcat: true,
      productedit: '',
      newCategory: '',
      cart: [],
      totalPrice: 0,
      name: ''
    }
  },
  mounted(){
    let token = localStorage.getItem('token')
    if(token){
      this.seen = false
    }
    this.getAllProduct()
  },
  methods: {
    getAllProduct(){
      axios.get('http://localhost:3000/products')
      .then(products => {
        this.allProducts = products.data
        this.showcat = true
      })
      .catch(err => {
        console.log(err.message)
      })
    },
    filterCategory(value){
      this.productcategory = []
      this.allProducts.forEach(element => {
        if(element.category === value){
          this.productcategory.push(element)
        }
      })
      this.showcat = false
    },
    search (input) {
      axios.get(`http://localhost:3000/products/search?q=${input}`)
      .then(products => {
        this.productcategory = products.data
        this.showcat = false
      })
      .catch(err => {
        alert(err.message)
      })
    },
    logout(){
      localStorage.clear()
      this.seen = true
    },
    login(){
      axios.post('http://localhost:3000/users/login', {
        email: this.email,
        password: this.password
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
    getImage(file){
      this.url = file.target.files[0]
    },
    uploadToGcp(){
      let formData = new FormData()
      formData.append('image', this.url)
      axios.post('http://localhost:3000/products/upload', formData)
      .then(result => {
        axios.post('http://localhost:3000/products/uploadProduct', {
          name: this.productName,
          category: this.category,
          price: this.price,
          imgUrl: result.data.link
        })
          .then(newProduct => {
            alert('Successfully add new product')
            window.location='upload.html'
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
    },
    forEdit(input){
      this.productedit = input
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
    search (input) {
      axios.get(`http://localhost:3000/products/search?q=${input}`)
      .then(products => {
        this.productcategory = products.data
        this.showcat = false
      })
      .catch(err => {
        alert(err.message)
      })
    },
    logout(){
      localStorage.clear()
      window.location="index.html"
    },
    decrease(product){
      if(product.qty > 1){
        product.qty--
      }
    },
    increase(product){
      product.qty++
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
    checkout(){
      alert('Thank you for shopping with PinjemDonk!')
      this.count = 0
      window.location='index.html'
    },
    register () {
      axios.post('http://localhost:3000/users/register', {
        name: this.name,
        email: this.email,
        password: this.password
      })
      .then(newUser => {
        localStorage.setItem('token', newUser.data.token)
        localStorage.setItem('name', newUser.data.user.name)
        window.location='index.html'
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  }
})