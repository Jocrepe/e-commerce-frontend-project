<script setup>
import { useRouter } from 'vue-router'

import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';

import UserLayout from '@/components/user/UserLayout.vue'
import Product from '@/components/user/Product.vue'

const router = useRouter()

const productStore = useProductStore()
const cartStore = useCartStore()

const addToCart = (productData) => {
    cartStore.addToCart(productData)
    router.push({name: 'cart'})
}

</script>

<template>
    <div>
        <UserLayout>
            <div>

                <!-- hero-contents -->
                <div class="hero bg-base-200 h-96 my-5">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src="https://fastly.picsum.photos/id/280/200/200.jpg?hmac=jjE26x23XLyRTL5st1-nb_BAHldv1V3JoFRn4g_nN04"
                            class="w-full max-w-64 rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-semibold">Welcome !</h1>
                            <p class="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                                exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                    </div>
                </div>
                <!-- hero-contents -->

                <!-- product-shelf -->
                <div class="m-5">
                    <Product :products="productStore.list" :addToCart="addToCart"></Product>
                </div>
                <!-- product-shelf -->


            </div>
        </UserLayout>
    </div>
</template>