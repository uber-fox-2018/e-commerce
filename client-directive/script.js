var app = new Vue({
    el: '#main',
    data : {
        items : [],
        edit : null,
        cart : [],
        tes : 'asd',
        total : 0,
        admin : false,
        checklogin : false,
        email : '',
        password :'',
        searchBy :'',
        editData :'',
        url : '',
        name :'',
        category : '',
        price :''

    },
    methods :{
        checkLogin(){
            let token = localStorage.getItem('token')
            if(token){
                this.checklogin = true
            }
        },
        checkAdmin(){
            let checkadmin = localStorage.getItem('email')
            console.log(checkadmin)
            if(checkadmin == 'mario@mail.com'){
                this.admin = true
            }
        },
        allItem(){
            axios.get('http://localhost:3000/item/listitem')
            .then(data=>{
                this.items = data.data
            })
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
        },
        getCategory(category){
            axios.get(`http://localhost:3000/item/filter/${category}`)
            .then(data=>{
              console.log(data)
              this.items = data.data
            })
        },
        login(){
            axios.post('http://localhost:3000/users/login',{
                email : this.email,
                password : this.password
            })
            .then(data=>{
                localStorage.setItem('token',data.data.token)
                localStorage.setItem('email',data.data.dataUser.email)
                window.location ="http://localhost:8080/" 
            })
        },
        logout(){
            localStorage.clear()
            window.location = "http://localhost:8080/"
          },
        dataEdit(data){
            let formData = new FormData()
            formData.append('item',this.url)
            axios.post('http://localhost:3000/upload',formData)
            .then(result=>{
                let token = localStorage.getItem('token')
                axios.post(`http://localhost:3000/item/edit/${data._id}`,{
                    name :data.name,
                    category : data.category,
                    price : data.price,
                    url : result.data.link
                },{
                    headers :{
                        token : token
                    }
                })
                .then(data=>{
                    
                    window.location ="http://localhost:8080"
                })
                .catch(err=>{
                    console.log(err);
                    
                })
            })
            .catch(err=>{
                console.log(err);
                
            })
    

        },
        editItem(obj){
            console.log(obj.name);
            this.editData = obj
            
        },
        getImage(link){
            this.url = link.target.files[0]
            console.log(this.url)
        },
        addItem(){
            let formData = new FormData()
            formData.append('item',this.url)
            axios.post('http://localhost:3000/upload',formData)
            .then(result=>{
                let token = localStorage.getItem('token')
                axios.post('http://localhost:3000/item/addItem',{
                    name : this.name,
                    category : this.category,
                    price : this.price,
                    url : result.data.link
                },{
                    headers : {
                        token : token
                    }
                })
                .then(data=>{
                    console.log(data)
                })
                .catch(err=>{
                    console.log(err);
                    
                })
            })
            .catch(err=>{
                console.log(err);
                
            })
        },
        deleteItem(id){
            let token = localStorage.getItem('token')
            axios.delete(`http://localhost:3000/item/delete/${id}`,{
                headers :{
                    token : token
                }
            })
            .then(data=>{

                window.location ="http://localhost:8080"
            })
            .catch(err=>{
                console.log(err);
                
            })
        }
    },
    mounted (){
        this.allItem()
        this.getItem()
    },
    created(){
        this.checkAdmin()
        this.checkLogin()
    }
})