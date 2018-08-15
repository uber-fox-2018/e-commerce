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

const products = [
  {
    id: 1,
    name: "Fruit Donut",
    price: 21000,
    qty: 3,

    description: "donut with tasty fresh fruits.",
    image: "https://i.imgur.com/gIlRCpS.jpg"
  },
  {
    id: 2,
    name: "Variety Cake",
    price: 30000,
    qty: 3,

    description: "cake with variety of shapes.",
    image: "https://i.imgur.com/u6QAWi1.jpg"
  },
  {
    id: 3,
    name: "Strawberry glaze donut",
    price: 20000,
    qty: 3,

    description: "donut with tasty strawberry flavour.",
    image: "https://i.imgur.com/ZRcc44Z.jpg"
  },
  {
    id: 4,
    name: "macaron",
    price: 10000,
    qty: 3,
    description: "tasty and very sweet.",
    image: "https://i.imgur.com/f5WH1zx.jpg"
  },
  {
    id: 5,
    name: "Fruit Donut",
    price: 21000,
    qty: 3,

    description: "donut with tasty fresh fruits.",
    image: "https://i.imgur.com/gIlRCpS.jpg"
  },
  {
    id: 6,
    name: "Variety Cake",
    price: 30000,
    qty: 3,

    description: "cake with variety of shapes.",
    image: "https://i.imgur.com/u6QAWi1.jpg"
  },
  {
    id: 7,
    name: "Strawberry glaze donut",
    price: 20000,
    qty: 3,

    description: "donut with tasty strawberry flavour.",
    image: "https://i.imgur.com/ZRcc44Z.jpg"
  },
  {
    id: 8,
    name: "macaron",
    price: 10000,
    qty: 3,

    description: "tasty and very sweet.",
    image: "https://i.imgur.com/f5WH1zx.jpg"
  }
];

Vue.component("shopping-cart", {
//   template: `<shopping-cart inline-template :items="cartItems">`,
  props: ["prop"],
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
  },


});

const app = new Vue({
  el: "#app",

  data: {
    cartItems: [],
    items: products,

    featuredProducts: [
      {
        id: 1,
        name: "Yogurt milk",
        price: 21000,
        description: "donut with tasty fresh fruits.",
        image: "https://i.imgur.com/XCUKbgP.jpg"
      },
      {
        id: 2,
        name: "Oly Donut",
        price: 30000,
        description: "cake with variety of shapes.",
        image: "https://i.imgur.com/86wDOex.jpg"
      }
    ]
  },

  methods: {
    addToCart(itemToAdd) {
      var found = false;

      this.cartItems.forEach(item => {
        if (item.id === itemToAdd.id) {
          found = true;
          item.qty += 1;
          //   this.cartItems.      (itemToAdd.id);
        }
      });

      if (found === false) {
        this.cartItems.push(itemToAdd);
        itemToAdd.qty = 1;
        // itemToAdd.qty -= 1;
      }
    }
  }
});

//global//
