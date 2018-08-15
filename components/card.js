// card parent
Vue.component("card-item", {
  template: `
    <div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <br>
        <br>
        <strong>Sticker Github</strong>
        <div class="row">
          <div class="col-lg-3" v-for="sticker in listAllItem" v-if="sticker.category === 'Sticker'">
            <br>
            <div class="card">
              <img :src="sticker.imgUrl" class="card-img-top" alt="">
              <div class="card-body">
                <small>
                  <a href="#" class="text-dark">{{ sticker.title }}</a>
                  <br>
                  <br> {{ convertPrice(sticker.price) }}
                </small>
                <br>
                <i class="fa fa-star checked" v-for="stars in Number(sticker.stars)"></i>
                <i class="fa fa-diamond"></i>
                <br>
                <br>
                <button-order @propsButtonOrder="sticker"></button-order>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data: function() {
    return {
      listAllItem: [],
      carts: [],
      cartTotal: 0
    }
  },
  methods: {
    convertPrice: function(price) {
      return `Rp. ${Number(price).toLocaleString()}`
    },
    listAllDataItems() {
      axios.get('http://localhost:3030/api/items')
      .then(respon => {
        respon.data.dataAllItem.forEach(item => {
          this.listAllItem.push({
            imgUrl: item.imgUrl,
            title: item.title,
            price: item.price,
            category: item.category,
            stars: '5'
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    // orderItem: function(id, image, title, price) {
    //   this.carts.push({
    //     id: id,
    //     image: image,
    //     title: title,
    //     price: price,
    //   })
    //   this.cartTotal += Number(price)
    // },
  },
  created() {
    this.listAllDataItems()
  },
  // computed: {
  //   filteredListAllItem() {
  //     let self = this
  //     return self.listAllItem.filter(post => {
  //       let title = post.title.toLowerCase()
  //                   .includes(self.searchText.toLowerCase())
  //       return title
  //     })
  //   }
  // }
});
