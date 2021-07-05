$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $(".main_h").addClass("sticky");
  } else {
    $(".main_h").removeClass("sticky");
  }
});

$(".mobile-toggle").click(function() {
  if ($(".main_h").hasClass("open-nav")) {
    $(".main_h").removeClass("open-nav");
  } else {
    $(".main_h").addClass("open-nav");
  }
});

$(".main_h li a").click(function() {
  if ($(".main_h").hasClass("open-nav")) {
    $(".navigation").removeClass("open-nav");
    $(".main_h").removeClass("open-nav");
  }
});

$("nav a").click(function(event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $("html, body").animate(
    {
      scrollTop: target
    },
    500
  );
  event.preventDefault();
});

$("#showModal").click(function() {
  $(".modal").addClass("is-active");
});

$(".modal-close").click(function() {
  $(".modal").removeClass("is-active");
});

const products = [];

Vue.component("shopping-cart", {
  template: `<shopping-cart inline-template :items="cartItems">`,
  props: ["items"],
  computed: {
    Total: function() {
      var total = 0;
      this.items.forEach(item => {
        total += item.price * item.qty;
      });
      return total;
    }
  },

  methods: {
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
});

Vue.component("edit-item-admin", {
  template: `
  <button class="button" id="showModal">Show</button>
  `,
  
});

Vue.component("crud-admin", {
  template: `<div class="new-item">
  <h2>Create new Item</h2>
  <div class="form-group">
      <label for="name">Title:</label>
      <input v-model="title" type="text" class="form-control">
  </div>
  <div class="form-group">
      <label for="price">Price:</label>
      <input v-model="price" type="text" class="form-control">
  </div>
  <div class="form-group">
      <label for="stock">Image:</label>
      <input v-model="image" type="text" class="form-control">
  </div>
  <div class="form-group">
      <label for="tags">category:</label>
      <input v-model="category" type="text" class="form-control">
  </div>
  <button class="btn btn-primary" @click="addItem()">Submit</button>

  <hr>
  </div> `,
  data() {
    return {
      title: "",
      image: "",
      category: "",
      quantity: "",
      price: ""
    };
  },
  methods: {
    addItem: function() {
      console.log("yess");
      let obj = {
        title: this.title,
        image: this.image,
        category: this.category,
        quantity: this.quantity,
        price: this.price
      };

      let token = localStorage.getItem("token");
      axios
        .post(
          "http://localhost:3000/home/createItem",
          {
            title: this.title,
            image: this.image,
            category: this.category,
            quantity: this.quantity,
            price: this.price
          },
          {
            headers: {
              token
            }
          }
        )
        .then(response => {
          let data = response.data.task;
          console.log(`====>`, data);
          products.push(data);

          swal("Add!", "", "success");
        })
        .catch(err => {
          swal("Add!", "", "failed");
        });
    }
  }
});

Vue.component("item-list-admin", {
  template: ` <div class="row">
  <div class="col-lg-12" >
    <div class="row my-4" >
      <div class="col-lg-4 col-md-6 mb-4" v-for="(item, index) in listItem">
        <div class="card h-100">
          <a href="#">
            <img class="card-img-top" :src="item.image"  alt="" >
          </a>
          <div class="card-body">
            <h4 class="card-title">
            <p>{{ item.title }}</p>
            </h4>
            <p>{{ item.price }}</p>
            <p class="card-text">Stock:{{ item.quantity }}</p>
            <button @click="tambahItem(item)" class="btn btn-sm btn-primary">Add to Cart</button>
            <button @click="deleteItem(index)" class="btn btn-sm btn-secondary">delete</button>
          </div>
          <div class="card-footer">
            <span class="badge badge-primary tag">
            {{item.category}}
            </span>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>`,

  data: function() {
    return {
      listItem: products,

      cursorType: "zoom-in"
    };
  },
  methods: {
    getAllItem: function() {
      axios.get("http://localhost:3000/home/listItems").then(result => {
        result.data.found.forEach(item => {
          console.log(item);
          this.listItem.push({
            _id: item._id,
            title: item.title,
            image: item.image,
            category: item.category,
            quantity: item.quantity,
            price: item.price
          });
        });
      });
    },
    tambahItem: function(ChoosenItem) {
      this.$emit("tambahbarang", ChoosenItem);
    },
    deleteItem: function(index) {
      let token = localStorage.getItem("token");
      let ChoosenItemId = products[index]._id;

      axios({
        method: "DELETE",
        url: `http://localhost:3000/home/deleteItem/${ChoosenItemId}`,

        headers: {
          token: localStorage.getItem("token")
        }
      }).then(result => {
        swal("item deleted!", "", "success");

        products.splice(index, 1);
      });
    }
  },
  created() {
    this.getAllItem();
  }
});

Vue.component("item-list", {
  template: ` <div class="row">
  <div class="col-lg-12" >
    <div class="row my-4" >
      <div class="col-lg-4 col-md-6 mb-4" v-for="item in listItem">
        <div class="card h-100">
          <a href="#">
            <img class="card-img-top" :src="item.image"  alt="" >
          </a>
          <div class="card-body">
            <h4 class="card-title">
            <p>{{ item.title }}</p>
            </h4>
            <p>{{ item.price }}</p>
            <p class="card-text">Stock:{{ item.quantity }}</p>
            <button @click="tambahItem(item)" class="btn btn-sm btn-primary">Add to Cart</button>

          </div>
          <div class="card-footer">
            <span class="badge badge-primary tag">
            {{item.category}}
            </span>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>`,

  data: function() {
    return {
      listItem: products,

      cursorType: "zoom-in"
    };
  },
  methods: {
    getAllItem: function() {
      axios.get("http://localhost:3000/home/listItems").then(result => {
        // console.log(result);
        result.data.found.forEach(item => {
          // console.log(item);

          this.listItem.push({
            id: item._id,
            title: item.title,
            image: item.image,
            category: item.category,
            quantity: item.quantity,
            price: item.price
          });
        });
      });
    },
    tambahItem: function(ChoosenItem) {
      this.$emit("tambahbarang", ChoosenItem);
    }
  },
  created() {
    this.getAllItem();
  }
});

const app = new Vue({
  el: "#app",

  data: {
    cartItems: [],
    items: products
  },

  methods: {
    logout: function() {
      localStorage.removeItem("token");
      window.location = "http://localhost:8080/auth.html";
    },

    addToCart(itemToAdd) {
      var found = false;
      swal("Added to Cart!", "", "success");

      var counter = 0;
      this.cartItems.forEach(item => {
        if (item.id === itemToAdd.id && found == true) {
          itemToAdd.qty += 1;
          found = true;
        }
      });

      if (found === false) {
        counter++;

        this.cartItems.push(itemToAdd);
        itemToAdd.qty = 1;
      }
    }
  }

  
});

//global//
