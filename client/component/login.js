Vue.component('modal-login',{
    template :`
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <input type="text" placeholder="email" v-model="email" ><br><br>
            <input type="password" placeholder="password" v-model="password">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary"  data-dismiss="modal" v-on:click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
    `,
    data(){
        return{
            email : '',
            password :'',
        }
    },
    methods :{
        login(){
            axios.post('http://localhost:3000/users/login',{
                email : this.email,
                password : this.password
            })
            .then(data=>{
                localStorage.setItem('token',data.data.token)
                localStorage.setItem('email',data.data.dataUser.email)
                window.location ="http://localhost:8080/"
                console.log(data.data);
                
            })
        }
    }
    
})