var app = new Vue({
    el: '#app',
    data: {
        laptops: [{
            id: 1,
            img: './img/sale/rog.jpg',
            type: 'ASUS ROG G703GI',
            price: 54999000
        },{
            id: 2,
            img: './img/sale/macbookpro.jpg',
            type: 'Apple MacBook Pro',
            price: 41612000
        },{
            id: 3,
            img: './img/sale/msi.jpg',
            type: 'MSI Notebook GT75',
            price: 65999000
        }],
        handphones: [{
            id: 4,
            img: './img/sale/iphone.jpg',
            type: 'Apple iPhone X 256GB',
            price: 17250000
        },{
            id: 5,
            img: './img/sale/xiomi.jpg',
            type: 'Xiaomi Black Shark 64GB',
            price: 10490000
        },{
            id: 6,
            img: './img/sale/samsung.jpg',
            type: 'MSI Notebook GT75',
            price: 17600000
        }],
        allproducts: [{
            id: 1,
            img: './img/sale/rog.jpg',
            type: 'ASUS ROG G703GI',
            price: 54999000
        },{
            id: 2,
            img: './img/sale/macbookpro.jpg',
            type: 'Apple MacBook Pro',
            price: 41612000
        },{
            id: 3,
            img: './img/sale/msi.jpg',
            type: 'MSI Notebook GT75',
            price: 65999000
        },{ 
            id: 4,
            img: './img/sale/iphone.jpg',
            type: 'Apple iPhone X 256GB',
            price: 17250000
        },{
            id: 5,
            img: './img/sale/xiomi.jpg',
            type: 'Xiaomi Black Shark 64GB',
            price: 10490000
        },{
            id: 6,
            img: './img/sale/samsung.jpg',
            type: 'MSI Notebook GT75',
            price: 17600000
        }],
        cart:[],
        counter: 0,
        total: 0,
    },

    methods: {
        addBuy(data){
            let product = {
                id: data.id,
                type: data.type,
                price: data.price,
                img: data.img,
            }
            this.cart.push(product)
            this.counter++
            this.total += data.price    
        },
        formatPrice(price){
            return `Rp : ${price.toLocaleString()}`
        },
        cancelItem(index, price){
            let info = confirm('Are you sure to cancel item ?')
            if(info){
                this.cart.splice(index,1)
                this.total -= price
                this.counter--
            }
        },
        checkout(){
            if(this.cart.length === 0){
                swal({
                    icon: "error",
                    title: 'Oops... please buy item !',
                  })
            }else {
                swal({
                    title:`Total Payment : Rp. ${this.total.toLocaleString()}`,
                    text: "Are you sure checkout?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Payment success", {
                        icon: "success",
                      }),
                      this.cart.splice(0, this.cart.length),
                      this.counter = 0,
                      this.total = 0;
                    } else {
                      swal("Next buy");
                    }
                  });
            }
            
        }
    },
})


