var app = new Vue ({
    el: '#app',
    data: {
        electric: [{
            id: 1,
            name: 'Ibanez',
            price: 15000000,
            img: './img/ibanez.jpg'
        },{
            id: 2,
            name: 'ESP LTD',
            price: 10000000,
            img: './img/esp.jpg' 
        },{
            id: 3,
            name: 'Fender',
            price: 25000000,
            img: './img/fender.jpg' 
        },{
            id: 4,
            name: 'Jackson',
            price: 8000000,
            img: './img/jackson.jpg' 
        }],

        acoustic: [{
            id: 1,
            name: 'Yamaha',
            price: 2000000,
            img: './img/ac-2.jpg' 
        },{
            id: 2,
            name: 'Taylor',
            price: 40000000,
            img: './img/taylor.jpg' 
        },{
            id: 3,
            name: 'Cort',
            price: 3500000,
            img: './img/ac-3.jpg' 
        },{
            id: 5,
            name: 'Fender',
            price: 14000000,
            img: './img/ac-4.jpg' 
        }],

        cart: [],
        jumlah: 0,
        total_price: 0,
        transaction: []
    }, 
    methods: {
        addToCart(item){
            this.jumlah++
            this.total_price += item.price
            this.cart.push(item)
        },

        priceString(data){
            return `Rp. ${data.toLocaleString()},-`
        },

        deleteFromCart(price,index){
            let status = confirm('Are you sure you want to delete this item?')
            if (status) {
                this.total_price -= price
                this.jumlah--
                this.cart.splice(index,1)
            }
        },

        pay(){
            this.transaction.push(this.total_price)
            this.total_price = 0
            this.jumlah = 0
            this.cart.splice(0,this.cart.length)   
            swal("Payment Success!", "You clicked the button!", "success");
            console.log(this.transaction);
        }
    }
})