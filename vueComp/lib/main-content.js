console.log('masuk');

Vue.component('main-content',{
    template: 
    ` 
    <div>
        <slide></slide>
        <div name='items' style='margin-top: 40px'>
            <list-items v-bind:items="items"></list-items>
        </div>
     </div>
    `,
    data(){
        return {
            items :[
                { id: 1, name: 'bag 1', stock: 1, price: 460000, description: 'new model suit', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/210155016_-_EXPLORA_-_Rp.265.000_1_360x.jpg?v=1531814057", category: 'bag' },
                { id: 2, name: 'bag 2', stock: 2, price: 230000, description: 'new model suit', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/210502068_-_EVO_MNAVY_-_Rp.125.000_1_360x.jpg?v=1527150570", category: 'bag' },
                { id: 3, name: 'bag 3', stock: 3, price: 130000, description: 'new model suit', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/210502069_-_ECOPATCH_NAVY_-_Rp.125.000_2_360x.jpg?v=1533023417", category: 'bag' },
                { id: 4, name: 'bag 4', stock: 4, price: 130000, description: 'new model suit', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/210555015_-_ECOPATCH_BLACK_-_Rp.125.000_3_360x.jpg?v=1533023190", category: 'bag' },
                { id: 5, name: 'tshirt 1', stock: 5, price: 112500, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/610355055_-_LANCE_BLACK_LS_-_Rp.135.000_1_360x.jpg?v=1527151754", category: 'tshirt' },
                { id: 6, name: 'tshirt 2', stock: 5, price: 2190000, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/610156036_-_HUBERT_MISTY_-_Rp.120.000_1_360x.jpg?v=1527151454", category: 'tshirt' },
                { id: 7, name: 'tshirt 3', stock: 5, price: 2190000, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/610111105_-_WNS_MAROON_-_Rp.120.000_1_360x.jpg?v=1533024671", category: 'tshirt' },
                { id: 8, name: 'tshirt 4', stock: 5, price: 65000, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/611007931_-_SHUPO_DARK_GREEN_-_Rp.140.000_1_360x.jpg?v=1530607008", category: 'tshirt' },
                { id: 9, name: 'jakcet 1', stock: 5, price: 112500, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/411822005_-_LUKE_GREEN_-_Rp.320.000_5_360x.jpg?v=1531815621", category: 'jacket' },
                { id: 10, name: 'jacket 2', stock: 5, price: 50000, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/411055013_-_PUNCH_-_Rp.320.000_3_360x.jpg?v=1530607233", category: 'jacket' },
                { id: 11, name: 'jacket 3', stock: 5, price: 110000, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/411822005_-_LUKE_GREEN_-_Rp.320.000_5_360x.jpg?v=1531815621", category: 'jacket' },
                { id: 12, name: 'jacket 4', stock: 5, price: 78000, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/411515002_-_MAXHARY_KRM_-_Rp.295.000_1_360x.jpg?v=1530605530", category: 'jacket' },
                { id: 13, name: 'jacket 5', stock: 5, price: 65000, description: '-', img: "https://cdn.shopify.com/s/files/1/0009/9493/4828/products/411555004_-_MAXHARRY_BLACK_-_Rp.295.000_1_360x.jpg?v=1526007959", category: 'jacket' },
            ],

        }
    },

    methods : {
        

    }
})