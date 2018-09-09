<template>
  <div>
    <ForNavbar/>
    <Register/>
  </div>
</template>

<script>
import Register from '@/components/Register.vue'
import ForNavbar from '@/components/Navbar.vue'

export default {
  name: 'register',
  components: {
    Register, ForNavbar
  }
}
</script>
