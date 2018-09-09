<template>
    <div id="upload">
        <div id="uploadProduct">
            <label>Product Name</label>
            <input type="text" v-model="name" class="form-control">
            <label>Product Price</label>
            <input type="text" v-model="price" class="form-control">
            <label>Select Category</label>
            <select class="form-control" v-model="category">
            <option value="Party">Party</option>
            <option value="Formal">Formal</option>
            <option value="Occasion">Occasion</option>
            </select><br>
            <input type="file" @change="getImage($event)" id="selectFile">
            <button @click="uploadToGcp({name: name, category: category, price: price})" id="btnUpload">Upload</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'imageUpload',
    data () {
        return {
            name: '',
            category: '',
            price: ''
        }
    },
    methods : {
        ...mapActions([
            'getImage', 'uploadToGcp'
        ])
    }
}
</script>

<style scoped>
    #uploadProduct{
        margin-top: 100px;
        width: 80%;
        margin-left: 10%;
        padding: 70px;
    }
    label{
        float: left;
    }
    #upload{
        width: 50%;
        background: linear-gradient(#FC5C7D, #6A82FB);
        margin-left: 25%;
        height: 400px;
        border-radius: 10px;
    }
    #btnUpload{
    background: linear-gradient(#FC5C7D, #6A82FB);
    border-radius: 10px;
    width: 100px;
    }
</style>
