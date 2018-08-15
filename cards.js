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
    `
})

