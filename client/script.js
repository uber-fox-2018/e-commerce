var app = new Vue({
    el: '#main',
    data : {
        items : [],
        edit : null,
        cart : [],
        tes : 'asd'
    },
    methods :{
        allItem(){
            axios.get('http://localhost:3000/item/listitem')
            .then(data=>{
                this.items = data.data
            })
        },
        getDataEdit(data){
            this.edit = data
        },
        getItem(index){
            let item = this.items[index]
            this.cart.push({
                name : item.name,
                price : item.price
            })
        }
    },
    mounted (){
        this.allItem()
        this.getItem()
    }
})