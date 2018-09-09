<template>
    <div id="registerForm">
        <div id="registerId">
            <label>Name</label>
            <input type="text" v-model="name" class="form-control">
            <label>Email</label>
            <input type="email" v-model="email" class="form-control">
            <label>Password</label>
            <input type="password" v-model="password" class="form-control">
            <button @click="register({name: name, email: email, password: password})" id="btnRegister">Register</button>
        </div>
        <small id="manual" class="form-text text-muted">Already have an account? Manual <a href="#" @click="toLoginForm">login</a></small>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'register', 'toLoginForm'
    ])
  }
}
</script>

<style scoped>
  body{
    background: linear-gradient(#FC5C7D, #6A82FB);
    height: 100vh;
  }
  #registerForm{
    width: 40%;
    margin-left: 30%;
    margin-top: 100px;
    border: 1px transparent;
    background: linear-gradient(#FC5C7D, #6A82FB);
    height: 350px;
    border-radius: 20px;
  }
  #registerId{
    padding-left: 25%;
    padding-right: 25%;
    padding-top: 30px;
    margin-bottom: 10px;
  }
  #btnRegister{
    background: linear-gradient(#FC5C7D);
    margin-top: 7px;
    border-radius: 10px;
    width: 100px;
  }
  label{
    float: left;
  }
  #fbicon{
    width: 120px;
  }
  #manual{
    text-align: left;
    padding-left: 20px;
  }
</style>
