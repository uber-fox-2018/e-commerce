Vue.component('modal-to-buy',{
    template :
    `
        <div class="modal fade" id="itemToBuy" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginform">Add To Cart</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card" style="width: 100px; height:200px">
                                <img class="card-img-top" v-bind:src="itemToBuy.img" alt="Card image">
                            </div>
                        </div>

                        <div class="col-md-9">
                            <table>
                                <tr>
                                    <th>Name : </th>
                                    <td> {{itemToBuy.name}}</td>
                                </tr>
                                <tr>
                                    <th>Price : </th>
                                    <td> {{itemToBuy.price}} </td>
                                </tr>
                                <tr>
                                    <th>Qty : </th>
                                    <td>
                                        <input v-model="qty" type="number" min="1" />
                                        <div v-if="qty > itemToBuy.stock">
                                                <p class="message-warning"> stock is only {{itemToBuy.stock}} </p>
                                        </div>
                                        <div v-else-if="qty == 0">
                                            <p class="message-warning"> minimum qty is 1</p>
                                                <!-- <div class="alert alert-danger">
                                                        <strong>stock is only {{itemToBuy.stock}} </strong>
                                                </div> -->
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <th>Total : </th>
                                    <td>
                                        {{qty * itemToBuy.price}}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div v-if="qty > itemToBuy.stock || qty == 0">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary disabled">Submit</button>
                    </div>
                    <div v-else>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" v-on:click="pushToCart(itemToBuy, qty)" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

    props : ['itemToBuy'],
    data(){
        return {
            qty : 1
        }
    }
})