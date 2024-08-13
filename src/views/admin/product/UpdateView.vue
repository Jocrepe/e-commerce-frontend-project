<script setup>
import { reactive, onMounted, ref, provide } from 'vue';
import { useRouter, useRoute, RouterLink } from 'vue-router';

import { useAdminProductStore } from '@/stores/admin/product';

import AdminLayout from '@/components/admin/AdminLayout.vue';

const router = useRouter()
const route = useRoute()
const adminProductStore = useAdminProductStore()

const productIndex = ref(-1)
const mode = ref('Add')

onMounted(() => {
    if (route.params.id) {
        productIndex.value = parseInt(route.params.id)
        mode.value = 'Edit'
        const selectedProduct = adminProductStore.getProduct(productIndex.value)
        
        productData.name = selectedProduct.name
        productData.image = selectedProduct.image
        productData.price = selectedProduct.price
        productData.quantity = selectedProduct.quantity
        productData.about = selectedProduct.about
        productData.status = selectedProduct.status
    }
})

const FormData = [
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Price',
        field: 'price'
    },
    {
        name: 'About',
        field: 'about'
    },
    {
        name: 'Image',
        field: 'image'
    },
    {
        name: 'Quantity',
        field: 'quantity'
    }
]

const productData = reactive({
    name: '',
    price: '',
    about: '',
    image: '',
    quantity: '',
    status: ''
})

const updateProduct = () => {
    if (mode.value === 'Add') {
        adminProductStore.addProduct(productData)
        alert('Add complete!')
        router.push({ name: 'admin-product-list' })
    } else {
        adminProductStore.updateProduct(productIndex.value, productData)
        alert('Edit complete!')
        router.push({ name: 'admin-product-list' })
    }
}

</script>

<template>

    <AdminLayout>

        <div>
            <div class="shadow-xl p-10">

                <div class="text-2xl font-semibold">{{ mode }} product</div>

                <div class="divider"></div>

                <div class="grid grid-cols-2 gap-5">
                    <label v-for="form in FormData" class="form-control w-full">
                        <div class="label">
                            <span class="label-text">{{ form.name }}</span>
                        </div>
                        <input v-model="productData[form.field]" type="text" class="input input-bordered w-full " />
                    </label>
                </div>

                <div class="divider"></div>

                <div class="label-text my-2">Status</div>
                <div class="grid grid-cols-2 gap-5">
                    <select v-model="productData.status" class="select select-bordered w-full">
                        <option disabled selected>Choose status</option>
                        <option>Open</option>
                        <option>Close</option>
                    </select>
                </div>

                <div class="divider"></div>

                <div class="flex justify-end">
                    <RouterLink :to="{ name: 'admin-product-list' }"><button class="btn btn-ghost">Back</button>
                    </RouterLink>
                    <button class="ml-5 btn btn-secondary" @click="updateProduct">{{ mode }}</button>
                </div>

            </div>
        </div>

    </AdminLayout>

</template>