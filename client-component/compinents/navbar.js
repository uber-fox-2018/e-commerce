Vue.component('for-navbar', {
  data () {
    return{
      searchBy: ''
    }
  },
  props: ['count', 'seen'],
  methods: {
    filterCategory(value){
      this.$emit('category', value)
    },
    logout(){
      this.$emit('logout')
    },
    search(input){
      this.$emit('search', input)
    }
  },
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <a class="dropdown-item" href="#" @click="filterCategory('Formal')">Formal</a>
            <a class="dropdown-item" href="#" @click="filterCategory('Party')">Party</a>
            <a class="dropdown-item" href="#" @click="filterCategory('Occasion')">Occasion</a>
            </div>
        </li>
      </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" v-model="searchBy" v-on:keyup.enter="search(searchBy)" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" @click="search(searchBy)" type="submit">Search</button>
          <div v-if="seen">
            <button class="btn my-2 my-sm-0" type="submit"> <a href="login.html">Login</a></button>
            <button class="btn my-2 my-sm-0" type="submit"><a href="register.html">Register</a></button>
          </div>
          <div v-else>
          <button class="btn my-2 my-sm-0" type="submit" @click="logout">Logout</button>
          </div>
          <i class="fas fa-shopping-cart" data-toggle="modal" data-target="#myModal"></i>
          {{count}}
        </form>
    </div>
  </nav>
  `
})