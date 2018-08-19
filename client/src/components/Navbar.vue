<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="/">PinjemDonk</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Category
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" @click="filterByCategory('Party')">Party</a>
                <a class="dropdown-item" href="#" @click="filterByCategory('Formal')">Formal</a>
                <a class="dropdown-item" href="#" @click="filterByCategory('Occasion')">Occasion</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" v-model="searchBy" v-on:keyup.enter="search(`${searchBy}`)" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="search(`${searchBy}`)">Search</button>
            <div v-if="seen">
              <button class="btn my-2 my-sm-0" type="submit" @click="toLoginForm">Login</button>
              <button class="btn my-2 my-sm-0 mr-2" type="submit" @click="toRegisterForm">Register</button>
            </div>
            <div v-else>
              <button class="btn my-2 my-sm-0" type="submit" @click="logout">Logout</button>
            </div>
            <i class="fas fa-shopping-cart" data-toggle="modal" data-target="#exampleModal">{{shopCart.length}}</i>
          </form>
        </div>
    </nav>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'forNavbar',
  data () {
    return {
      searchBy: ''
    }
  },
  computed: {
    ...mapState([
      'shopCart'
    ]),
    seen: {
      get () {
        return this.$store.state.seen
      },
      set (val) {
        this.$store.commit('forSeen', val)
      }
    }
  },
  methods: {
    ...mapActions([
      'toLoginForm', 'toRegisterForm', 'logout', 'filterByCategory', 'search'
    ])
  }
}
</script>
