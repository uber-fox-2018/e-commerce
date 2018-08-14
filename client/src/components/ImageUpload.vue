<template>
    <form>
  <div class="form-group">
    <label>Product Name</label>
    <input type="text" v-model="name" class="form-control">
  </div>
  <div class="form-group">
    <label>Product Price</label>
    <input type="text" v-model="price" class="form-control">
  </div>
  <div class="form-group">
    <label>Select Category</label>
    <select class="form-control" v-model="category">
      <option value="Party">Party</option>
      <option value="Formal">Formal</option>
      <option value="Occasion">Occasion</option>
    </select>
  </div>
  <input type="file" @change="getImage($event)">
  <button @click="uploadToGcp({name: name, category: category, price: price})">Upload</button>
</form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'imageUpload',
    data () {
        return {
            name: '',
            category: '',
            price: ''
        }
    },
    methods : {
        ...mapActions([
            'getImage', 'uploadToGcp'
        ])
    }
}
</script>

