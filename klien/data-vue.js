var app = new Vue({
    el: "#app",
    data:
    {
        product:

            [
                {
                    id: 1,
                    name: "ksatria Baja Hitam",
                    stock: 3,
                    price: 150000,
                    image: "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/12/17/13982868/13982868_30147dfb-c28e-4fa5-9e5b-a3145b20edbc_700_933.jpg"
                },
                {
                    id: 2,
                    name: "Iron Man",
                    stock: 8,
                    price: 175000,
                    image: "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/12/18/13982868/13982868_398e9efb-6498-488b-8cbf-99e72dea615c_567_756.jpg"
                },
                {
                    id: 3,
                    name: "Venom",
                    stock: 5,
                    price: 120000,
                    image: "//images2.superherostuff.com/image-tsvensinsmile-primary-productresultset.jpg"
                },
                {
                    id: 4,
                    name: "Captain America",
                    stock: 10,
                    price: 150000,
                    image: "https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/6/16/11148628/11148628_3ad1a718-9f99-4a9c-b919-ab3b62631984_2048_2896.jpg"
                },
                {
                    id: 5,
                    name: "Wonder Woman Kids",
                    stock: 12,
                    price: 90000,
                    image: "//images.superherostuff.com/image-tswwkidscostcape-1-productimagenowatermark.jpg"
                },
                {
                    id: 6,
                    name: "Flash",
                    stock: 6,
                    price: 100000,
                    image: "https://ecs7.tokopedia.net/img/cache/300/product-1/2018/3/24/570480/570480_0237d881-8b6d-4578-b9a0-2c01662c80ac_1181_1181.jpg.webp"
                }
            ],
            carts:[],
            totalPrice : 0
    },
    methods: {
        addcart : function(index){

            let quantity = this.product[index]
            var check = false
            for(let i=0;i<this.carts.length;i++){

                if(this.carts[i].name === quantity.name ){
                    this.carts[i].qty++
                    check =true
                }
            }
            if(!check){
                this.carts.push({
                    name : quantity.name,
                    image: quantity.image,
                    stock: quantity.stock,
                    price: quantity.price,
                    qty:1
                    
                })
            } 
            quantity.stock-=1
            this.totalPrice += quantity.price

    

        },

        convertToRupiah: function (price) {
                return `IDR ${price.toLocaleString()},-`
            
        },

        deleteQty : function(){
            // this.carts.quatity.stock -= 1

            console.log(this.carts)
        },

        

        // checkout: function(){
        //     swal("succes", "You clicked the button!", "success");
             

        // },

    }





})