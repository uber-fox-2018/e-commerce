Vue.component('upload', {
  data (){
    return {
      produtName: '',
      category: '',
      price: '',
    }
  },
  mounted (){
    let token = localStorage.getItem('token')
    if(!token){
      alert('Login')
      window.location='login.html'
    }
  },
  methods: {
    uploadToGcp(){
      this.$emit('upload', {name: this.produtName, category: this.category, price: this.price})
    },
    getImage(file){
      this.$emit('getimage', file)
    }
  },
  template: `
    <div class="upload" style="width: 50%; margin-left:25%; margin-top: 20px;border-radius: 5px;">
      Product Name:<br>
      <input type="text" v-model="produtName" style="width: 100%; height:40px;border-radius: 5px;" placeholder="Product Name...">
      <br>
      Price:<br>
      <input type="text" v-model="price" style="width: 100%;height:40px;border-radius: 5px;" placeholder="Price...">
      <br>
      <label>Select Category</label>
        <select class="form-control" v-model="category">
          <option value="Party">Party</option>
          <option value="Formal">Formal</option>
          <option value="Occasion">Occasion</option>
        </select>
      <br><br>
      <input type="file" @change="getImage($event)" id="selectFile">
      <button @click="uploadToGcp" id="btnUpload">Upload</button>
    </div>
  `
})