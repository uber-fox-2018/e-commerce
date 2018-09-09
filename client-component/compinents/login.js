Vue.component('login', {
  data (){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login(){
      this.$emit('login', {email: this.email, password: this.password})
    }
  },
  template: `
    <div class="login" style="width: 50%; margin-left:25%; margin-top: 20px;border-radius: 5px;">
      Email:<br>
      <input type="text" v-model="email" style="width: 100%; height:40px;border-radius: 5px;" placeholder="Email...">
      <br>
      Password:<br>
      <input type="password" v-model="password" style="width: 100%;height:40px;border-radius: 5px;" placeholder="Password...">
      <br><br>
      <button @click="login" style="width: 100%;height:40px;border-radius: 5px;">Login</button>
    </div>
  `
})