console.log('masuk');

Vue.component('main-content',{
    template: 
    ` 
    <div>
        <slide></slide>
        <div name='items' style='margin-top: 40px'>
            <list-items v-bind:items="bags"></list-items>
            <list-items v-bind:items="tshirts"></list-items>
            <list-items v-bind:items="jackets"></list-items>
        </div>
     </div>
    `,
    data(){
        return {
            bags :[
                { id: 1, name: 'Suit Boss', stock: 1, price: 460000, description: 'new model suit', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/210155016_-_EXPLORA_-_Rp.265.000_1_360x.jpg?v=1531814057", category: 'bag' },
                { id: 2, name: 'Suit Boss Guide', stock: 2, price: 230000, description: 'new model suit', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/210502068_-_EVO_MNAVY_-_Rp.125.000_1_360x.jpg?v=1527150570", category: 'bag' },
                { id: 3, name: 'Suit Boss', stock: 3, price: 130000, description: 'new model suit', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/210502069_-_ECOPATCH_NAVY_-_Rp.125.000_2_360x.jpg?v=1533023417", category: 'bag' },
                { id: 4, name: 'Suit Boss', stock: 4, price: 130000, description: 'new model suit', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/210555015_-_ECOPATCH_BLACK_-_Rp.125.000_3_360x.jpg?v=1533023190", category: 'bag' },
            ],
            tshirts : [
                { id: 1, name: 'Mesin Jahit Portable', stock: 5, price: 112500, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/610355055_-_LANCE_BLACK_LS_-_Rp.135.000_1_360x.jpg?v=1527151754", category: 't-shirt' },
                { id: 2, name: 'Ps3 Super Slim', stock: 5, price: 2190000, description: 'Hdd 320gb Segel Voit SONY', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/610156036_-_HUBERT_MISTY_-_Rp.120.000_1_360x.jpg?v=1527151454", category: 't-shirt' },
                { id: 3, name: 'DVD Player', stock: 5, price: 2190000, description: 'PLUS Kabel HDMI', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/610111105_-_WNS_MAROON_-_Rp.120.000_1_360x.jpg?v=1533024671", category: 't-shirt' },
                { id: 4, name: 'Stick PS3', stock: 5, price: 65000, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/611007931_-_SHUPO_DARK_GREEN_-_Rp.140.000_1_360x.jpg?v=1530607008", category: 't-shirt' },
            ],
            jackets: [
                { id: 1, name: 'Sport Watch', stock: 5, price: 112500, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/411822005_-_LUKE_GREEN_-_Rp.320.000_5_360x.jpg?v=1531815621", category: 'jacket' },
                { id: 2, name: 'Sunglass Outdor', stock: 5, price: 50000, description: 'Hdd 320gb Segel Voit SONY', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/411055013_-_PUNCH_-_Rp.320.000_3_360x.jpg?v=1530607233", category: 'jacket' },
                { id: 3, name: 'Gloves Super', stock: 5, price: 110000, description: 'PLUS Kabel HDMI', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/411822005_-_LUKE_GREEN_-_Rp.320.000_5_360x.jpg?v=1531815621", category: 'jacket' },
                { id: 4, name: 'Sport Heat', stock: 5, price: 78000, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/411515002_-_MAXHARY_KRM_-_Rp.295.000_1_360x.jpg?v=1530605530", category: 'jacket' },
                { id: 5, name: 'Oudor Heat', stock: 5, price: 65000, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/411555004_-_MAXHARRY_BLACK_-_Rp.295.000_1_360x.jpg?v=1526007959", category: 'jacket' },
            ],

        }
    },

    methods : {
        

    }
})