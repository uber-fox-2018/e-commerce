Vue.component('modal-edit',{
    template : `
    <div class="modal fade" id="ModalEdit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Item</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
    
        <div class="modal-body">
            <input type="text" placeholder="item name" v-model="dataitem.name"><br><br>
            <input type="text" placeholder="price" v-model="dataitem.price">
            <input type="text" placeholder="category" v-model="dataitem.category" ><br><br>
            <input type="file" v-on:change="getImage($event)">
        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" v-on:click="dataEdit(edit)" data-dismiss="modal">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
    `,
    props :['edit'],
    data(){
        return {
            dataitem :{}
            
        }
    },
    methods :{
        dataEdit(data){
            // console.log(data._id)
            let formData = new FormData()
            formData.append('item',this.dataitem.url)
            axios.post('http://localhost:3000/upload',formData)
            .then(result=>{
                axios.post(`http://localhost:3000/item/edit/${data._id}`,{
                    name :this.dataitem.name,
                    category : this.dataitem.category,
                    price : this.dataitem.price,
                    url : result.data.link
                })
                .then(data=>{
                    
                    window.location ="http://localhost:8080"
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
            this.dataitem.url = link.target.files[0]
        }
    },
    watch:{
        edit(){
            this.dataitem = this.edit
        }
    }
})