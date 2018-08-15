var app = new Vue({
  el: '#app',
  data: {
    categories: [
      {
        name: 'Laptop',
        url: 'http://localhost:8080/laptop.html'
      },
      {
        name: 'Sticker',
        url: 'http://localhost:8080/sticker.html'
      }
      // 'E-Voucher & Tiket',
      // 'Promo',
      // 'Perawatan & Kecantikan',
      // 'Kesehatan',
      // 'Fashion Wanita',
      // 'Fashion Pria',
      // 'Handphone',
      // '',
      // 'Elektronik',
      // 'Kamera',
      // 'Hobi & Koleksi',
      // '',
      // 'Sepeda',
      // 'Fashion Anak',
      // 'Perlengkapan Bayi',
      // 'Rumah Tangga',
      // 'Food',
      // 'Mobil, Part dan Aksesoris',
      // 'Motor',
      // 'Industrial',
      // 'Perlengkapan Kantor',
      // 'Tiket & Voucher',
    ],
    tagPopuler: [
      'Kolam Renang Anak',
      'Ransel Rolltop',
      'Topi Fedora',
      'Whey Protein',
      'Gaming Mouse',
      'Perfect V Lifting Premium Mask'
    ],
    promoTheDay: [
      {
        imgUrl: 'https://s1.bukalapak.com/uploads/flash_banner/16013/s-392-392/392x392.jpg.webp',
        title: 'Ayo Serbu Pembelian Pertamamu',
      },
      {
        imgUrl: 'https://s1.bukalapak.com/uploads/flash_banner/61013/s-392-392/392x392_hp.jpg.webp',
        title: 'Orang Pintar Pakai Hp Pintar'
      },
      {
        imgUrl: 'https://s2.bukalapak.com/uploads/flash_banner/22013/s-392-392/392x392_fashion_brand.jpg.webp',
        title: 'Bebaskan Gayamu dengan OOTD Terbaru'
      },
      {
        imgUrl: 'https://s3.bukalapak.com/uploads/flash_banner/82013/s-392-392/392x392_kamera.jpg.webp',
        title: 'Promo Bundling Kamera Cek Aja!'
      },
      {
        imgUrl: 'https://s1.bukalapak.com/uploads/flash_banner/13013/s-392-392/392x392_laptop.jpg.webp',
        title: 'Kerja Semangat dengan Laptop Mutu Dahsyat'
      },
      {
        imgUrl: 'https://s2.bukalapak.com/uploads/flash_banner/73013/s-392-392/392x392_brand.jpg.webp',
        title: 'Merdeka Belanja Produk Brand Ternama'
      }
    ],
    listElektronik: [],
    listStickers: [],
    listAllItem: [],
    yesno: '',
    carts: [],
    cartTotal: 0,
    totalBarang: 0,
    searchText: ''
  },
  methods: {
    convertPrice: function(price) {
      return `Rp. ${Number(price).toLocaleString()}`
    },
    orderItem: function(id, image, title, price) {
      this.carts.push({
        id: id,
        image: image,
        title: title,
        price: price,
      })
      this.cartTotal += Number(price)

      // axios 
      //   .post('http://localhost:3030/api/customers/5b72c9aeab228e55b303d085/listItemCustomer', {
      //     data: {
      //       id: id,
      //       image: image,
      //       title: title,
      //       price: price,
      //     }
      //   })
      //   .then(result => {
      //     console.log('=========>', result)
      //   })
      //   .catch(err => {
      //     console.log('error =====>', err)
      //   })
    },
    listAllDataItems() {
      axios.get('http://localhost:3030/api/items')
      .then(respon => {
        respon.data.dataAllItem.forEach(item => {
          this.listAllItem.push({
            imgUrl: item.imgUrl,
            title: item.title,
            price: item.price,
            category: item.category
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
    },

    checkOut: function() {
      swal("Thank You!", "Happy Shopping", "success");
      setTimeout(() => {
        window.location = 'http://localhost:8080/index.html'
      }, 2000)
    },

    descriptionItem: function(image, title, price) {
      swal({
        title: title,
        text: 'Modal with a custom image.',
        imageUrl: image,
        imageAlt: 'Custom image',
        animation: false
      })
    }
    // listSticker() {
    //   axios.get('http://localhost:3030/api/items')
    //   .then(respon => {
    //     respon.data.dataAllItem.forEach(item => {
    //       console.log(item.category)
    //       if (item.category === 'Sticker') {
    //         this.listStickers.push({
    //           imgUrl: item.imgUrl,
    //           title: item.title,
    //           price: item.price,
    //           stars: '5',
    //           ulasan: '120'
    //         })
    //       }
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // }


  },
  mounted() {
    this.listAllDataItems()
    // this.listSticker()
  },
  computed: {
    filterdList() {
      let self = this
      return self.listElektronik.filter(post => {
        let title = post.title.toLowerCase()
                    .includes(self.searchText.toLowerCase())
        return title
      })
    },
    filteredListAllItem() {
      let self = this
      return self.listAllItem.filter(post => {
        let title = post.title.toLowerCase()
                    .includes(self.searchText.toLowerCase())
        return title
      })
    }
  }
})