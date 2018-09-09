Vue.component('products', {
  props: ['allproducts', 'productedit'],
  data(){
    return{
      newCategory: ''
    }
  },
  methods: {
    deleteProduct(input){
      this.$emit('deleteproduct', input)
    },
    edit(input){
      this.$emit('edit', input)
    },
    forEdit(input){
      this.$emit('foredit', input)
    }
  },
  template: `
  <div style="width:70%; margin-left:15%">
    <h2>All Products</h2>
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
        <tr v-for="(cart, index) in allproducts" v-bind:key="index">
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
                    <input type="text" v-model="productedit.name" id="inputEdit"><br>
                    <label>Price: </label><br>
                    <input type="text" v-model="productedit.price" id="inputEdit"><br><br>
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
                  <button type="button" class="btn btn-primary" data-dismiss="modal" id="btnsave" @click="edit({id: productedit._id, name: productedit.name, price: productedit.price, category: newCategory, imgUrl: productedit.imgUrl})">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
  `
})