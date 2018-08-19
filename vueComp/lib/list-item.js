Vue.component('list-items', {
    template : 
    `
    <div>
                <div class="container" id="\`items[0].category\`">
                    <div class="row items title">
                        <div class="col-md-2" style="margin-top: 1%">
                            <h5>{{items[0].category}} Items</h5>
                        </div>
                    </div>
                </div>
                <div class="container" style="background-color: danger">
                    <div class="row items">
                        <div class="col-md-3 col-sm-6" v-for="item in items">
                            <div class="card border-secondary mb-3" style="width:auto; margin-bottom: 10px;">
                                <img class="card-img-top" v-bind:src="item.img" alt="Card image">
                                <div class="card-body">
                                    <h6 class="card-title">
                                        <b>{{item.name}}</b>
                                    </h6>
                                    <!-- <p class="card-text"> {{item.description}} </p> -->
                                    <p class="card-text"> {{item.price}} </p>
                                    <div v-if="item.stock < 1">
                                        <p class="card-text"> Stok Habis </p>
                                        <a href="#" class="btn btn-primary disabled" data-toggle="modal" data-target="#addtocart" v-on:click="itemToBuy(item)" disabled>Buy</a>
                                    </div>
                                    <div v-else>
                                        <p class="card-text">Stok {{item.stock}} </p>
                                        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#itemToBuy" v-on:click="itemToBuy(item)">Buy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <hr>
            {{dataItemToBuy}}
            <modal-to-buy v-bind:itemToBuy="dataItemToBuy"></modal-to-buy>
    </div>
    `,
    props : ['items'],
    data(){
        return {
            dataItemToBuy : []
        }
    },

    methods: {
        itemToBuy(dataItem){
            console.log(dataItem);
            
            this.dataItemToBuy = dataItem
            console.log(this.dataItemToBuy);
            
        },

      
    }
})