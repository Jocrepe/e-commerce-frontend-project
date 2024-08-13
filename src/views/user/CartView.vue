<script setup>
import { RouterLink } from 'vue-router';

import { useCartStore } from '@/stores/cart';

import cross from '@/components/user/cross.vue'
import UserLayout from '@/components/user/UserLayout.vue'

const cartStore = useCartStore()

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}

</script>

<template>
    <div>
        <UserLayout>
            <div class="flex my-5">
                <div class="flex-auto w-64 bg-base-200">

                    <div v-if="cartStore.items.length === 0" class="text-2xl font-bold">Cart is empty</div>

                    <div v-else v-for="(item, index) in cartStore.items" class="flex">
                        <div class="flex-1">
                            <img class="w-full p-10" :src="item.imageUrl">
                        </div>
                        <div class="flex-1 p-10">
                            <div class=" flex flex-col justify-between h-full">
                                <div class="grid grid-cols-2 gap-4 relative">
                                    <div>
                                        <div class="text-xl font-semibold mb-3">{{ item.name }}</div>
                                        <div class="mb-3">{{ item.about }}</div>
                                        <div>{{ item.price }} B</div>
                                    </div>

                                    <select v-model="item.quantity" @change="changeQuantity($event, index)"
                                        class="select select-secondary w-1/2">
                                        <option disabled selected>Quantity</option>
                                        <option v-for="quantity in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">{{ quantity }}</option>
                                    </select>

                                    <div @click="cartStore.removeItemInCart(index)"
                                        class="absolute w-8 h-8 top-0 right-0 cursor-pointer">
                                        <cross></cross>
                                    </div>

                                </div>

                                <div>In stock</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex-auto w-32 bg-base-300 p-10">
                    <div class="text-2xl font-bold mb-5">Order Summary</div>

                    <div class="flex justify-between mb-2">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cartStore.totalPrice }} B</div>
                    </div>

                    <div class="divider"></div>

                    <div class="flex justify-between mb-2">
                        <div>ค่าส่ง</div>
                        <div>-</div>
                    </div>

                    <div class="divider"></div>

                    <div class="flex justify-between mb-2">
                        <div>ราคารวมทั้งหมด</div>
                        <div>{{ cartStore.totalPrice }} B</div>
                    </div>

                    <RouterLink :to="{name: 'checkout'}">
                        <div class="my-5 text-center">
                            <button class="btn btn-primary w-1/2 ">Check out</button>
                        </div>
                    </RouterLink>

                </div>

            </div>
        </UserLayout>
    </div>
</template>