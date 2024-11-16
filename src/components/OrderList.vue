<template>
    <div class="orders-list-container">
        <h1>Orders List</h1>
        <table>
            <thead>
                <tr>Order number</tr>
                <tr>Total</tr>
                <tr>Actions</tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.orderNumber }}</td>
                    <td>{{ order.total }}</td>
                    <td>
                        <button class="btn-small" @click="editOrder(order.id)">Edit</button>
                        <button class="btn-small btn-danger" @click="deleteOrder(order.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link to="/create-order" class="add-order-link">Add New Order</router-link>
    </div>
</template>

<script>
import {db} from '../firebaseConfig.js'
import {collection, addDoc,getDocs,doc, deleteDoc,updateDoc} from 'firebase/firestore'

export default{
    data(){
        return{
            orders : [],
        }
    },
    async created(){
        await this.fetchOrders();
    },
    methods:{
        async fetchOrders(){
            const querySnapshot =await getDocs(collection(db, 'orders'))
            this.orders = querySnapshot.docs
        },
        editOrder(id){

        },
        async deleteOrder(id){
            await deleteDoc(doc(db,'orders', id))
            await this.fetchOrders()

        },
    }
}
</script>
