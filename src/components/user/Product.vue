<script setup>
import { defineProps } from 'vue';

defineProps({
    products: Array,
    addToCart: Function
})

</script>

<template>
    <div class="grid grid-cols-1 sm:grid-col2 md:grid-col-3 lg:grid-cols-4 gap-5">
        <div v-for="(product, index) in products" class="card bg-base-100 w-full shadow-xl">
            <figure>
                <img class="w-full" :src="product.imageUrl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ product.name }}</h2>
                <p>{{ product.about }}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" @click="addToCart(product)">Buy Now</button>
                </div>
            </div>
            
        </div>
    </div>
    
</template>