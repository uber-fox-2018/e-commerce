<template>
  <div>
    <ForNavbar/>
    <ForImage/>
    <div>
      <table class="table">
        <thead>
          <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(cart, index) in allProducts" v-bind:key="index">
          <td><img v-bind:src="cart.imgUrl" id="img" style="width:50px;"></td>
          <td>{{cart.name}}</td>
          <td>{{cart.price}}</td>
          <td>{{cart.category}}</td>
          <!-- <td>{{cart.price * cart.qty}}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ForImage from '@/components/ImageUpload.vue'
import ForNavbar from '@/components/Navbar.vue'
import {mapState, mapActions} from 'vuex'
import router from '../router.js'

export default {
  name: 'forNavbar',
  data () {
    return {
      products: ''
    }
  },
  components: {
    ForImage, ForNavbar
  },
  computed: {
    ...mapState([
      'seen', 'allProducts'
    ])
  },
  mounted () {
    this.getAllProduct()
    let token = localStorage.getItem('token')
    let isAdmin = localStorage.getItem('isAdmin')
    if (token && isAdmin === 'true') {
      this.$store.state.seen = false
    } else {
      this.$store.state.seen = true
      alert('You have no access!')
      router.push('/')
    }
  },
  methods: {
    ...mapActions([
      'getAllProduct'
    ])
  }
}
</script>
