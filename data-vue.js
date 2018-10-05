new Vue({
    el: "#app",
    data: {
        products: [
            {
                id: 1,
                name: "I Know HTML",
                price: 75000,
                stock: 1,
                img: "https://s4.bukalapak.com/img/916976464/large/programmerrepublic_20161002_0010_scaled.jpg"
            }, 
            {
                id: 2,
                name: "Coffe Coding",
                price: 85000,
                stock: 5,
                img: "https://ciptaloka-mockups.s3.amazonaws.com/design/rg4wbn9v4y-572-0-1--l.jpg"
            },
            {
                id: 3,
                name: "Node JS",
                price: 75000,
                stock: 15,
                img: "https://ciptaloka-mockups.s3.amazonaws.com/design/97zxvw54ag-143-0-2--l.jpg"
            },
            {
                id: 4,
                name: "Eat Sleep Code",
                price: 75000,
                stock: 15,
                img: "https://id-live.slatic.net/p/7/tshirt-kaos-eat-sleep-dive-2551-95181878-3b498bed8c85070a83c4a9a033f03225-product.jpg"
            },
            {
                id: 5,
                name: "Offline Now",
                price: 75000,
                stock: 15,
                img: "https://id-live-01.slatic.net/p/7/bercahaya-busana-katun-programmer-leher-bulat-lengan-pendek-t-shirt-hijau-7-hijau-7-1505527513-60720144-8f058184e788d0e3f8303b833e99e640-product.jpg"
            },
            {
                id: 6,
                name: "Java",
                price: 75000,
                stock: 15,
                img: "https://www.satubaju.com/img/editor/img_iscums/248/2113248_m.jpg"
            }
        ],
        carts: [],
        totalPrice: 0,
        myTrolly: localStorage.getItem('carts')
    },
    watch: {
        carts : function() {
            console.log(this.carts)
            if ( localStorage.getItem('carts') ) {
                localStorage.removeItem('carts')
                localStorage.setItem('carts', JSON.stringify(this.carts))
            } else{
                localStorage.setItem('carts', JSON.stringify(this.carts))
            }
        }   
    },
    methods: {
        addCart: function(id) {
            let idxItem
            this.products.forEach((val,idx) => {
                if (id === val.id) {
                    idxItem = idx
                }
            });
            // decrement stock
            this.products[idxItem].stock -= 1

            // object new trolly
            let objTroly = {
                id: this.products[idxItem].id,
                name: this.products[idxItem].name,
                total: 1,
                price: this.products[idxItem].price
            }

            // total price             
            this.totalPrice += this.products[idxItem].price

            // add cart
            let ada = false
            this.carts.forEach( e => {
                if(e.id == this.products[idxItem].id) {
                    ada = true
                    e.total += 1
                }
            } )

            if(!ada) {
                this.carts.push(objTroly)
            } else {
                this.carts = this.carts.slice(0)
            }
            
        }
    }
})