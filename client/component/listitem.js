Vue.component('list-item',{
    template :`


    <div style="margin-top:20px">

    <div id="nav-categories" class="offset-md-2">
    <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a  @click="allItem" class="nav-link active black--text" href="#">All</a>
        </li>
        <li class="nav-item">
          <a @click="getCategory('figures')" class="nav-link  black--text" href="#">Figures</a>
        </li>
        <li class="nav-item">
          <a @click="getCategory('gundam')" class="nav-link  black--text" href="#">Gundam</a>
        </li>
        <li class="nav-item">
          <a @click="getCategory('zoid')" class="nav-link  black--text" href="#">Zoid</a>
        </li>
      </ul>
    </div>

    <div class="container" style="margin-top:30px">
    <div class="row">
        <div class="col-md-4" v-for="(item,index) in items" :key=index>
            <div class="card" style="width: 18rem;border:1px solid;" >
                <img class="card-img-top" :src="item.url" alt="Card image cap">
                <div class="card-body">
                <center>
                    <h5 class="card-title">{{item.name}}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">Rp {{item.price}}</li>
                        <li class="list-group-item">{{item.category}}</li>
                        {{admin}}
                    </ul>
                </center>
                    <div class="container">  
                        <div class="row" style="margin-top:10px">
                        <div class="col-md-4">
                        <a href="#" class="btn btn-outline-dark" v-on:click="addToCart(index)"><i class="fas fa-plus-circle"></i></a>
                        </div>
                            
                            <div class="col-md-4" v-if="admin">
                            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#ModalEdit" v-on:click="editItem(item)">Edit</a>
                            </div>
                            
                            <div class="col-md-4" v-if="admin">
                            <a href="#" class="btn btn-danger" v-on:click="deleteItem(item._id)">Delete</a>
                            
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
</div>
    `,
    props :['items','admin'],
    methods :{
        editItem(data){
            this.$emit('item-edit',data)
        },
        deleteItem(id){
            let token = localStorage.getItem('token')
            axios.delete(`http://localhost:3000/item/delete/${id}`,{
                headers : {
                    token : token
                }
            })
            .then(data=>{
                window.location ="http://localhost:8080"
            })
            .catch(err=>{
                console.log(err);
                
            })
        },
        addToCart(index){
            this.$emit('item-cart',index)
        },
        getCategory(category){
            axios.get(`http://localhost:3000/item/filter/${category}`)
            .then(data=>{
              console.log(data)
              this.items = data.data
            })
        },
        allItem(){
            axios.get('http://localhost:3000/item/listitem')
            .then(data=>{
                this.items = data.data
            })
        },
    }
})