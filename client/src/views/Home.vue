<template>
  <div class="forNavbar">
    <ForNavbar/>
    <Modal/>
    <ForCarousel/>
    <Product/>
    <ForFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import ForNavbar from '@/components/Navbar.vue'
import ForCarousel from '@/components/Carousel.vue'
import Product from '@/components/Product.vue'
import ForFooter from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'forNavbar',
  components: {
    ForNavbar, ForCarousel, Product, ForFooter, Modal
  },
  computed: {
    ...mapState([
      'seen'
    ])
  },
  mounted () {
    let token = localStorage.getItem('token')
    if(token){
      this.$store.state.seen = false
    } else {
      this.$store.state.seen = true
    }
  }
}
</script>
