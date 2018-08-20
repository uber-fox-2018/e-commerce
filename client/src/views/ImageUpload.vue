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
          <tr v-for="(cart, index) in allProducts" v-bind:key="index">
            <td><img v-bind:src="cart.imgUrl" id="img" style="width:50px;"></td>
            <td>{{cart.name}}</td>
            <td>{{cart.price}}</td>
            <td>{{cart.category}}</td>
            <td><a href="#" style="color:black"><i class="far fa-edit" @click="forEdit(cart)" data-toggle="modal" data-target="#exampleModal"></i></a> || <a href="#" style="color:black"><i class="far fa-trash-alt" @click="deleteProduct(cart._id)"></i></a></td>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form id="formEdit">
                      <label>Product: </label><br>
                      <input type="text" v-model="productEdit.name" id="inputEdit"><br>
                      <label>Price: </label><br>
                      <input type="text" v-model="productEdit.price" id="inputEdit"><br><br>
                      <select v-model="newCategory" id="inputEdit">
                        <option disabled value="">Please select the category</option>
                        <option value="Party">Party</option>
                        <option value="Formal">Formal</option>
                        <option value="Occasion">Occasion</option>
                      </select>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" id="btnsave" @click="edit({id: productEdit._id, name: productEdit.name, price: productEdit.price, category: newCategory, imgUrl: productEdit.imgUrl})">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
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
      products: '',
      newCategory: ''
    }
  },
  components: {
    ForImage, ForNavbar
  },
  computed: {
    ...mapState([
      'seen', 'allProducts', 'productEdit'
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
      'getAllProduct', 'edit', 'deleteProduct', 'forEdit'
    ])
  }
}
</script>

<style scoped>
  table{
    margin-top: 30px;
    width: 80%;
    margin-left: 10%;
  }
</style>
