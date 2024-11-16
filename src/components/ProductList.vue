<template>
    <div class="product-list-container"></div>
    <h1>Product List</h1>
    <table>
        <thead>
            <tr>Name</tr>
            <tr>Price</tr>
            <tr>Descriptions</tr>
            <tr>Actions</tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id"></tr>
            <td>{{ product.name }}</td>
             <td>{{ product.price }}</td>
             <td>{{ product.description }}</td>
        </tbody>
    </table>
</template>

<script>
import {db} from '../firebaseConfig.js'
import {collection, addDoc,getDocs,doc, deleteDoc,updateDoc} from 'firebase/firestore'

export default{
    data(){
        return{
            products : [],
            showAddProduct : false,
            productForm: {
                name: '',
                price: 0,
                description: ''
            }
        }
    },
}
</script>
