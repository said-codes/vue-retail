<template>
  <div id="app">
    <h1>Welcome to your Vue.js App</h1>
    <nav>
      <router-link to="/products">Product List</router-link>
      <router-link to="/orders">Order List</router-link>
      <router-link to="/create-order">Create Order</router-link>
    </nav>
    <rouetr-view></rouetr-view>
  </div>
</template>

<script>
export default{
  name : 'App',
}
</script>

<style>
/* Estilos globales */
nav a {
  margin: 0 10px;
}
</style>