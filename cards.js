Vue.component('card-content', {
    template: `
    <div class="container">
        <div class="row">
        <div class="col s12 m4 l3" v-for="item in cards">
            <div class="card">
                <div class="card-image">
                    <img v-bind:src="item.photo">
                    <a class="btn-floating halfway-fab waves-effect modal-trigger #607d8b blue-grey" href="#modalbutton" v-on:click="openModal(item)">
                        <i class="material-icons">add</i>
                    </a>
                </div>
                <div class="card-content">
                    <p>{{ item.description }}</p>
                    <p>{{ putCurrency(item.price) }}</p>
                </div>
                <div class="card-action">
                    <a href="#" style="color: darkgrey;" v-on:click="addToCart(item)">Add to cart</a>
                </div>
            </div>
        </div>
        </div>
    </div>
    `, 
    data () {
        return {
            cards: [
                { id: 1, photo: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dwd76da9c3/2001752/2001752-15-2.jpg?sw=566&sh=849&sm=fit', description: 'Simple wear', price: 77 },
                { id: 2, photo: 'https://cottonon.com/on/demandware.static/-/Sites-catalog-master-women/default/dwa5549bbc/241182/241182-153-2.jpg', description: 'Jeans', price: 50 },
                { id: 3, photo: 'https://cottonon.com/on/demandware.static/-/Sites-catalog-master-women/default/dw4b428128/2003318/2003318-31-2.jpg', description: 'Baggy shirt', price: 35 },
                { id: 4, photo: 'https://cottonon.com/on/demandware.static/-/Sites-catalog-master-supre/default/dw2a98bfbe/8047687/8047687-17-2.jpg', description: 'Overalls', price: 55 },
            ],
            itemInModal: {}
        }
    }, 
    methods: {
        openModal: function (item) {
            this.itemInModal = { id: item.id, photo: item.photo, description: item.description, price: item.price }
        }
    }
})

