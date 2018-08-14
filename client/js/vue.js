let app = new Vue({
  el: '#app',
  data: {
    user: 'Vue',
    categories: [{
      icon: '<i class="fas fa-coffee"></i>',
      name: 'Drinks',
      tag: '#drinks'
    }, {
      icon: '<i class="fas fa-utensils">',
      name: 'Foods',
      tag: '#foods'
    },
    // {
    //   icon: '<i class="fas fa-male"></i>',
    //   name: 'Man Clothes',
    //   tag: '#manClothes'
    // }, {
    //   icon: '<i class="fas fa-female"></i>',
    //   name: 'Women Clotes',
    //   tag: '#womenClothes'
    // }, {
    //   icon: '<i class="fas fa-mobile-alt"></i>',
    //   name: 'Phone & Accessories',
    //   tag: '#phone'
    // }, {
    //   icon: '<i class="fas fa-laptop"></i>',
    //   name: 'Laptop & Accessories',
    //   tag: '#laptop'
    // }
    ],
    foods: [
      {
        id: 1,
        name: 'bakso',
        category: 'Food',
        description: 'Bakso Malang mantab enaaaak! dijamin nyesel deh ngga nyobain',
        price: 12000,
        qty: 12,
        img: 'https://anekaresepnusantara.info/wp-content/uploads/2017/03/Resep-Bakso-Urat-Sapi-Spesial-dan-Mantap.jpg'
      },
      {
        id: 2,
        name: 'Nasi Goreng',
        category: 'Food',
        description: 'Nasi Goreng Makjambrong, mantaaab!',
        price: 15000,
        qty: 10,
        img: 'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/944501ee-4a97-47ee-864a-1d66bbe5bd29.jpg'
      },
      {
        id: 3,
        name: 'Bubur Ayam',
        category: 'Food',
        description: 'Bubur ayam cirebon yang di buat dengan bumbu ayam pilihan',
        price: 10000,
        qty: 13,
        img: 'http://www.damniloveindonesia.com/image/catalog/explore_indonesia/Artikel/Taste/bubur/bubur_opening.jpg'
      }],
    drinks: [
      {
        id: 4,
        name: 'King Mango',
        category: 'Drink',
        description: 'King Mango Malang mantab enaaaak! dijamin nyesel deh ngga nyobain',
        price: 12000,
        qty: 8,
        img: 'https://harianjakarta.com/wp-content/uploads/2017/12/picture-1500102361.jpg'
      },
      {
        id: 5,
        name: 'Soda Gembira',
        category: 'Drink',
        description: 'Soda mantab bikin ngiler',
        price: 15000,
        qty: 6,
        img: 'https://dpenyetzbatam.com/wp-content/uploads/2017/03/15gembira-556x600.jpg'
      },
      {
        id: 6,
        name: 'King Durian',
        category: 'Drink',
        description: 'Dibuat dengan durian montong',
        price: 10000,
        qty: 4,
        img: 'https://b.zmtcdn.com/data/pictures/7/18638487/d8e0a34a49df18b83c93106e706ee327_featured_v2.jpg'
      }],
    carts: [],
    itemBuy: '',
    buyQty: 0,
    notes: '',
  },

  methods: {
    buyItem: function (item) {
      this.notes = ''
      this.buyQty = 0
      let addItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        category: item.category
      }
      this.itemBuy = addItem
    },
    addItemToCart: function () {
      this.itemBuy.qty = Number(this.buyQty)
      this.itemBuy.notes = this.notes
      this.itemBuy.totalPrice = this.itemBuy.qty * this.itemBuy.price
      this.carts.push(this.itemBuy)
      this.notes = ''
      this.buyQty = 0
    },
    totalPrice: function (price, qty = 0) {
      if (this.buyQty === 0) {
        return price * qty
      } else {
        return price * this.buyQty
      }
    },
    totalPriceOnCart: function (carts) {
      let price = 0
      carts.forEach(item => {
        price += item.totalPrice
      })
      return price
    },
    convertMoney: function (price) {
      return `Rp. ${price.toLocaleString()}`
    },
    removeItem: function (idx) {
      this.carts.splice(idx, 1)
    },
    substractStock: function (items) {
      items.forEach((item, idxItem) => {
        if (item.category === 'Food') {
          this.foods.forEach((food, idxFood) => {
            if (food.id == item.id) {
              food.qty -= item.qty
            }
          })
        } else if (item.category === 'Drink') {
          this.drinks.forEach((drink, idxDrink) => {
            if (drink.id == item.id) {
              drink.qty -= item.qty
            }
          })
        }
      })
      items.splice(0)
    }
  },

  computed: {

  },

  watch: {

  }
})