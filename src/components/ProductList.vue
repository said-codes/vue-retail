<template>
    <div class="product-list-container">
        <h1>Product List</h1>
        <table>
            <thead>
                <tr>Name</tr>
                <tr>Price</tr>
                <tr>Descriptions</tr>
                <tr>Actions</tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.description }}</td>
                    <td>
                        <button class="btn-small" @click="editProduct(product.id)">Edit</button>
                        <button class="btn-small btn-danger" @click="deleteProduct(product.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="showAddProduct == true">Add new Product</button>
        <div v-if="showAddProduct || selectedProduct"m class="product-form">
            <input v-model="productForm.name" placeholder="Nombre">
            <input v-model="productForm.price" placeholder="Precio" type="number">
            <textarea v-model="productForm.description" placeholder="Descripción"></textarea>

            <button @click="submitProduct">submit</button>
            <button @click="cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
import {db} from '../firebaseConfig.js'
import {collection, addDoc,getDocs,doc, deleteDoc,updateDoc} from 'firebase/firestore'

export default{
    data(){
        return{
            products : [],
            showAddProduct : false,
            selectedProduct : null,
            productForm: {
                name: '',
                price: 0,
                description: ''
            }
        }
    },
    async created(){
        await this.fetchProducts();
    },
    methods:{
        async fetchProducts(){
            const querySnapshot =await getDocs(collection(db, 'products'))
            this.products = querySnapshot.docs
            .map(doc => ({id: doc.id, ...doc.data()}))
            .sort((a,b)=> a.name.localCompare(b.name))
        },
        editProduct(id){
            const product = this.product.find(product => product.id == id)
            this.productForm = {...product}
            this.selectedProduct = id
            this.showAddProduct = true

        },
        async deleteProduct(id){
            await deleteDoc(doc(db,'products', id))
            await this.fetchProducts()

        },
        async submitProduct(){
            if(this.selectedProduct){
                await updateDoc(doc(db,'products', this.selectedProduct), this.productForm)
            }else{
                addDoc(collection(db,'products'),this.productForm)
            }
            this.cancel()
            await this.fetchProducts()

        }, cancel(){
            this.showAddProduct = false
            this.selectedProduct = null
            this.productForm = {name: '', price:0, description: ''}

        }
    }
}
</script>
