Vue.component('navbar',{
    data:function(){
      return{
        searchBy :''
      }
    },
    template : `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Toys & Hobbies</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#" data-toggle="modal" data-target="#exampleModal">Add</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#loginModal">Login</a>
          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#registModal">Register</a>
          </div>
      </li>
    
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <a class="nav-link active" href="#" data-toggle="modal" data-target="#modalCart"><i class="fas fa-shopping-cart fa-2x"></i></a>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchBy">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="search(searchBy)">Search</button>
    </form>
  </div>
</nav>
    `,
    methods :{
      search(input){
        this.$emit('search',input)
        console.log(input)
      }
    }
})