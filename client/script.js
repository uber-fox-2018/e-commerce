var app = new Vue({
    el: '#main',
    data : {
        items : [],
        edit : null,
        cart : [],
        tes : 'asd',
        total : 0
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
            var found = false
            for(let i=0;i<this.cart.length;i++){
                console.log(this.cart[i].name,"==============",item.name);
                
                if(this.cart[i].name == item.name){
                    found = true
                    this.cart[i].qty++
                }

            }
            if(!found){
                this.cart.push({
                    name : item.name,
                    price : item.price,
                    qty : 1
                })
            }
            this.total+=item.price    
        },
        search(input){
            axios.get(`http://localhost:3000/item/searchItem?q=${input}`)
            .then(data=>{
                console.log(data.data)
                this.items= data.data
            })
            .catch(err=>{
                log(err)
            })
        }
    },
    mounted (){
        this.allItem()
        this.getItem()
    }
})