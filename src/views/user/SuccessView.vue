<script setup>
import { onMounted } from 'vue';

import { useCartStore } from '@/stores/cart';

import UserLayout from '@/components/user/UserLayout.vue'

const cartStore = useCartStore()

onMounted(() => {
    cartStore.loadCheckout()
})

</script>

<template>
    <div>
        <UserLayout>
            
            <div class="border border-gray-400 shadow-xl w-full max-w-4xl mx-auto p-5">
                
                <div>
                    <div class="text-2xl font-semibold">Your order is successful !</div>
                    <div>Hi, {{ cartStore.receipt.fullname }}</div>
                    <div>เตรียมรอรับสินค้าของคุณได้เลย</div>
                </div>

                <div class="divider"></div>
                
                <div class="grid grid-cols-4 gap-5">

                    <div>
                        <div class="font-semibold text-xl">Order Date</div>
                        <div>{{ cartStore.receipt.createdDate }}</div>
                    </div>
                    <div>
                        <div class="font-semibold text-xl">Order Number</div>
                        <div>{{ cartStore.receipt.orderNumber }}</div>
                    </div>
                    <div>
                        <div class="font-semibold text-xl">Payment Method</div>
                        <div>{{ cartStore.receipt.paymentMethod }}</div>
                    </div>
                    <div>
                        <div class="font-semibold text-xl">Address</div>
                        <div>{{ cartStore.receipt.address }}</div>
                    </div>

                </div>

                <div class="divider"></div>

                <div v-for="item in cartStore.items" class="grid grid-cols-4 gap-4 items-center">
                    <div>
                        <img class="w-full p-3" :src="item.imageUrl">
                    </div>
                    <div class="text-lg font-semibold ">
                        {{ item.name }}
                    </div>
                    <div>
                        จำนวน: {{ item.quantity }}
                    </div>
                    <div>
                        ราคา: {{ item.quantity * item.price }} B
                    </div>
                </div>

                <div class="divider"></div>

                <div class="flex justify-between">
                    <div class="text-lg font-semibold">ราคาสินค้าทั้งหมด</div>
                    <div>{{ cartStore.totalPrice }} B</div>
                </div>
                <div class="flex justify-between">
                    <div class="text-lg font-semibold">ค่าส่ง</div>
                    <div>0 B</div>
                </div>

                <div class="divider"></div>

                <div class="flex justify-between">
                    <div class="text-lg font-semibold">ราคารวมทั้งหมด</div>
                    <div>{{ cartStore.totalPrice }} B</div>
                </div>

                <div class="divider"></div>

                <div class="text-xl text-center">Thank you !</div>

            </div>

        </UserLayout>
    </div>
</template>