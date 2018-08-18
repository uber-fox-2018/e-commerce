Vue.component('modal-cart',{
    template :`
    <div class="modal fade" id="modalCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal Cart</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <ul>
                <li v-for="item in cart">
                    {{item.name}}
                </li>
            </ul>
        {{cart}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" v-on:click="addItem" data-dismiss="modal">Add Item</button>
        </div>
      </div>
    </div>
  </div>
    `,
    props : ["cart"]
})