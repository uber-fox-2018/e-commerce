var app = new Vue({
    el: "#app",
    data: {
        Jersey: [
            {
                id: 1,
                text: 'Home Jersey',
                description: 'Manchester United Home Jersey',
                img: '/images/mu-jersey-home.jpeg',
                priceTag: 'Rp. 120,000',
                price: 120000

            },
            {
                id: 2,
                text: 'Away Jersey',
                description: 'Manchester United Away Jersey',
                img: '/images/mu-jersey-away.jpeg',
                priceTag: 'Rp. 120,000',
                price: 120000
            },
            {
                id: 3,
                text: 'Third Jersey',
                description: 'Manchester United Third Jersey',
                img: '/images/mu-jersey-third.jpeg',
                priceTag: 'Rp. 150,000',
                price: 150000
            },
            {
                id: 4,
                text: 'Training Jersey',
                description: 'Manchester United Training Jersey',
                img: '/images/mu-jersey-training.jpeg',
                priceTag: 'Rp. 180,000',
                price: 180000
            },

        ],
        carts: [],
        isActive: false,
        totalPrice: 0
    },
    methods: {
        addItem: function (id) {
            this.Jersey.forEach(element => {
                let tag = `${element.text} =    ${element.priceTag}`
                if (element.id === id) {
                    this.carts.push(tag)
                }
            });
        },
        payItem:function(){
            this.carts = []
        },
        confirmPay: function () {
            this.carts = []
            this.isActive = false
        },
        checkout: function () {
            this.isActive = true
        },
        close: function () {
            this.isActive = false
        },
        countItems: function () {
            return this.carts.length
        },
        countPrice: function () {
            this.Jersey.forEach(element => {
                if (element.id === id) {
                   this.totalPrice += element.price
                }
                // return this.totalPrice
            });
        }
    }
})

// Vue. 