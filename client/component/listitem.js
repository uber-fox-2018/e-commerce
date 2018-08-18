Vue.component('list-item',{
    template :`
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
                    </ul>
                </center>
                    <div class="container">  
                        <div class="row" style="margin-top:10px">
                        <div class="col-md-4">
                        <a href="#" class="btn btn-outline-dark" v-on:click="addToCart(index)"><i class="fas fa-plus-circle"></i></a>
                        </div>
                            <div class="col-md-4">
                            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#ModalEdit" v-on:click="editItem(item)">Edit</a>
                            </div>
                            
                            <div class="col-md-4">
                            <a href="#" class="btn btn-danger" v-on:click="deleteItem(item._id)">Delete</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
    `,
    props :['items'],
    methods :{
        editItem(data){
            this.$emit('item-edit',data)
        },
        deleteItem(id){
            axios.delete(`http://localhost:3000/item/delete/${id}`)
            .then(data=>{
                window.location ="http://localhost:8080"
            })
            .catch(err=>{
                console.log(err);
                
            })
        },
        addToCart(index){
            this.$emit('item-cart',index)
        }
    }
})