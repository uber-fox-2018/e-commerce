Vue.component('modal',{
    template : `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <input type="text" placeholder="item name" v-model="itemName"><br><br>
            <input type="text" placeholder="price" v-model="price">
            <input type="text" placeholder="category" v-model="category"><br><br>
            <input type="file" v-on:change="getImage($event)">
        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" v-on:click="addItem" data-dismiss="modal">Add Item</button>
        </div>
      </div>
    </div>
  </div>
    `,
    data(){
        return {
            itemName : '',
            category : '',
            price : null,
            url : ''
        }
    },
    methods :{
        addItem(){
            let formData = new FormData()
            formData.append('item',this.url)
            axios.post('http://localhost:3000/upload',formData)
            .then(result=>{
                axios.post('http://localhost:3000/item/addItem',{
                    name : this.itemName,
                    category : this.category,
                    price : this.price,
                    url : result.data.link
                })
                .then(data=>{
                    console.log(data)
                })
                .catch(err=>{
                    console.log(err);
                    
                })
            })
            .catch(err=>{
                console.log(err);
                
            })
        },
        getImage(link){
            this.url = link.target.files[0]
            console.log(this.url)
        }
    }
})