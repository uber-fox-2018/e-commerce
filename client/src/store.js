import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: '',
    shopCart: [],
    totalQty: 0,
    totalPrice: 0,
    seen: true,
    allProducts: [],
    productsCategory: '',
    show: true,
    productEdit: ''
  },
  mutations: {
    forSeen (state, payload) {
      state.seen = payload
    }
  },
  actions: {
    getAllProduct (context, payload) {
      axios.get('https://server-pinjemdonk.setiaanggraeni.co/products')
        .then(products => {
          this.state.allProducts = products.data
          this.state.productsCategory = ''
        })
        .catch(err => {
          console.log(err)
        })
    },
    increase (context, payload) {
      payload.qty++
    },
    decrease (context, payload) {
      if (payload.qty > 1) {
        payload.qty--
      } else {
        payload.qty = 1
      }
    },
    addCart (context, payload) {
      this.state.totalQty += payload.qty
      this.state.totalPrice += payload.price * payload.qty
      var status = false
      if (this.state.shopCart.length !== 0) {
        this.state.shopCart.forEach(element => {
          if (payload.name === element.name) {
            element.qty += 1
            status = true
          }
        })
        if (!status) {
          this.state.shopCart.push(payload)
        }
      } else {
        this.state.shopCart.push(payload)
      }
    },
    getImage (context, payload) {
      this.state.url = payload.target.files[0]
    },
    uploadToGcp (context, payload) {
      let formData = new FormData()
      formData.append('image', this.state.url)
      axios.post('https://server-pinjemdonk.setiaanggraeni.co/products/upload', formData)
        .then(result => {
          axios.post('https://server-pinjemdonk.setiaanggraeni.co/products/uploadProduct', {
            name: payload.name,
            category: payload.category,
            price: payload.price,
            imgUrl: result.data.link
          })
            .then(newProduct => {
              router.push('/upload')
              alert('Successfully add new product')
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      axios.post('https://server-pinjemdonk.setiaanggraeni.co/users/register', {
        name: payload.name,
        email: payload.email,
        password: payload.password
      })
        .then(newUser => {
          localStorage.setItem('token', newUser.data.token)
          localStorage.setItem('name', newUser.data.user.name)
          this.state.seen = false
          router.push('/')
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    login (context, payload) {
      axios.post('https://server-pinjemdonk.setiaanggraeni.co/users/login', {
        email: payload.email,
        password: payload.password
      })
        .then(userLogin => {
          localStorage.setItem('token', userLogin.data.token)
          localStorage.setItem('name', userLogin.data.name)
          localStorage.setItem('isAdmin', userLogin.data.isAdmin)

          this.state.seen = false
          let admin = userLogin.data.isAdmin
          if (admin === true) {
            router.push('/upload')
          } else {
            router.push('/')
          }
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    toLoginForm (context, payload) {
      router.push('/login')
    },
    toRegisterForm (context, payload) {
      router.push('/register')
    },
    logout (context, payload) {
      this.state.seen = true
      localStorage.clear()
      router.push('/')
    },
    deleteProduct (context, payload) {
      axios.delete(`https://server-pinjemdonk.setiaanggraeni.co/products/delete/${payload}`)
        .then(delProduct => {
          router.push('/upload')
          alert('Deleted!')
        })
        .catch(err => {
          alert(err.message)
        })
    },
    edit (context, payload) {
      axios.put(`https://server-pinjemdonk.setiaanggraeni.co/products/edit/${payload.id}`, {
        name: payload.name,
        price: payload.price,
        category: payload.category,
        imgUrl: payload.imgUrl
      })
        .then(updatePro => {
          router.push('/upload')
          alert('Edited!')
        })
        .catch(err => {
          alert(err.message)
        })
    },
    filterByCategory (context, payload) {
      axios.get(`https://server-pinjemdonk.setiaanggraeni.co/products/category?q=${payload}`)
        .then(products => {
          this.state.productsCategory = products.data
          this.state.show = false
        })
        .catch(err => {
          alert(err.message)
        })
    },
    search (context, payload) {
      console.log('---', payload)
      axios.get(`https://server-pinjemdonk.setiaanggraeni.co/products/search?q=${payload}`)
        .then(products => {
          this.state.productsCategory = ''
          this.state.productsCategory = products.data
          this.state.show = false
        })
        .catch(err => {
          alert(err.message)
        })
    },
    checkout (context, payload) {
      router.push('/checkout')
    },
    forEdit (context, payload) {
      this.state.productEdit = payload
    }
  }
})
