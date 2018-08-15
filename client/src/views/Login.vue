<template>
  <div>
    <ForNavbar/>
    <Login/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import ForNavbar from '@/components/Navbar.vue'

export default {
  name: 'login',
  components: {
    Login, ForNavbar
  }
}
</script>

<style scoped>

</style>
