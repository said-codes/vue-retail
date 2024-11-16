<template>
    <div class="create-order-container">
        <h1>Create New Order</h1>
        <form @submit.prevent="submitOrder">
            <input v-model="newOrder.orderNumber" placeholder="Order Number" class="input-style">

            <table class="product-selection-order">
            <thead>
                <tr>Product</tr>
                <tr>Price</tr>
                <tr>Quantity</tr>
                <tr>Add</tr>
            </thead>
            <tbody>
                <tr v-for="product in availableProducts" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>
                        <input type="number" v-model="product.quantity" min="0" placeholder="Quantity" class="input-style">
                    </td>
                    <td>
                        <button type="button" @click="addProductOrder(product)" class="add-button" :disabled="isProductAdded(product)">Add</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <h2>Selected Products:</h2>
        <ul>
            <li v-for="(item,index) in newOrders"></li>
        </ul>

        </form>

    </div>
</template>
