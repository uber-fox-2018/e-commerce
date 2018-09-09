<template>
  <div id="loginForm">
    <div id="itsLogin">
      <label>Email</label>
      <input type="email" v-model="email" class="form-control">
      <label>Password</label>
      <input type="password" v-model="password" class="form-control">
      <button @click="login({email: email, password: password})" id="btnLogin">Login</button>
    </div>
    <small id="manual" class="form-text text-muted">No have any account? Manual <a href="#" @click="toRegisterForm">register</a></small>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login', 'toRegisterForm'
    ])
  }
}
</script>

<style scoped>
  body{
    background: linear-gradient(#FC5C7D, #6A82FB);
    height: 100vh;
  }
  #loginForm{
    width: 40%;
    margin-left: 30%;
    margin-top: 100px;
    border: 1px transparent;
    background: linear-gradient(#FC5C7D, #6A82FB);
    height: 300px;
    border-radius: 20px;
  }
  label{
    float: left;
  }
  #itsLogin{
    padding-left: 25%;
    padding-right: 25%;
    padding-top: 60px;
    margin-bottom: 10px;
  }
  #btnLogin {
    background: linear-gradient(#FC5C7D);
    margin-top: 7px;
    border-radius: 10px;
    width: 100px;
  }
  #fbicon{
    width: 120px;
  }
  #manual{
    text-align: left;
    padding-left: 20px;
  }
</style>
