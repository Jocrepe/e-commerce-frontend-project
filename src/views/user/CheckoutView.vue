<script setup>
import { reactive } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

import { useCartStore } from '@/stores/cart.js'

import UserLayout from '@/components/user/UserLayout.vue'

const cartStore = useCartStore()
const router = useRouter()

const FormData = [
    {
        name: 'Email Address',
        field: 'email'
    },
    {
        name: 'Full Name',
        field: 'fullname'
    },
    {
        name: 'Address',
        field: 'address'
    },
    {
        name: 'Note',
        field: 'note'
    }
]

const userFormData = reactive({
    email: '',
    fullname: '',
    address: '',
    note: ''
})

const payment = () => {
    cartStore.checkout(userFormData)
    router.push({ name: 'success' })
}

</script>

<template>
    <div>
        <UserLayout>
            <div class="flex my-5">

                <div class="flex-auto w-64 bg-base-200 p-10">

                    <div>
                        <label v-for="form in FormData" class="form-control w-full">
                            <div class="label">
                                <span class="label-text text-lg">{{ form.name }}</span>
                            </div>
                            <input v-model="userFormData[form.field]" type="text" placeholder="Type here"
                                class="input input-bordered w-full" />
                        </label>
                    </div>

                    <div class="my-5 text-center">
                        <button @click="payment" class="btn btn-primary w-1/2">Payment</button>
                    </div>

                </div>

                <div class="flex-auto w-32 bg-base-300">

                    <div v-for="item in cartStore.items" class="flex">
                        <div class="flex-1">
                            <img class="w-full p-10" :src="item.imageUrl">
                        </div>
                        <div class="flex-1 ">
                            <div class="flex justify-between flex-col h-full p-10">
                                <div>
                                    <div class="text-xl font-semibold mb-5">{{ item.name }}</div>
                                    <div class="mb-5">ราคา: {{ item.price }}</div>
                                    <div>จำนวน: {{ item.quantity }}</div>
                                </div>

                                <RouterLink :to="{name: 'cart'}"><button class="btn btn-ghost">Edit</button></RouterLink>
                            </div>
                        </div>
                    </div>

                    <div class="divider px-10"></div>

                    <div class="p-8">
                        <div class="text-2xl font-semibold mb-4">Order Summary</div>

                        <div class="flex justify-between">
                            <div>ราคาสินค้าทั้งหมด</div>
                            <div>{{ cartStore.totalPrice }} B</div>
                        </div>

                        <div class="flex justify-between">
                            <div>ค่าส่ง</div>
                            <div>-</div>
                        </div>

                    </div>

                    <div class="divider px-10"></div>

                    <div class="flex justify-between p-8">
                        <div>ราคารวมทั้งหมด</div>
                        <div>{{ cartStore.totalPrice }} B</div>
                    </div>                    

                </div>

            </div>
        </UserLayout>
    </div>
</template>