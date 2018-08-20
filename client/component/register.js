Vue.component('modal-regist',{
    template :`
    <div class="modal fade" id="registModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Register</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <input type="text" placeholder="name" v-model="name"><br><br>
            <input type="text" placeholder="email" v-model="email" ><br><br>
            <input type="password" placeholder="password" v-model="password">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary"  data-dismiss="modal" v-on:click="register">Register</button>
        </div>
      </div>
    </div>
  </div>
    `,
    data(){
        return{
            name : '',
            email : '',
            password :''
        }
    },
    methods :{
        register(){
            axios.post('http://localhost:3000/users/register',{
                name : this.name,
                email : this.email,
                password : this.password
            })
            .then(data=>{
                console.log(data);
                
            })
        }
    }
})