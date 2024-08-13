<script setup>
import { watch, ref, computed } from 'vue';
import { useRoute } from 'vue-router'

import { useProductStore } from '@/stores/product';

import UserLayout from '@/components/user/UserLayout.vue'
import Product from '@/components/user/Product.vue'

const route = useRoute()
const productStore = useProductStore()

const searchText = ref('')

const filterProduct = computed(() => {
    return productStore.filterProduct(searchText.value)
})

watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, {immediate: true})

</script>

<template>
    <div>
        <UserLayout>
            <div class="my-5">

                <div class="text-xl">Search: <label class="text-xl font-semibold">{{ searchText }}</label></div>

                <div class="m-5">
                    <Product :products="filterProduct"></Product>
                </div>

            </div>
        </UserLayout>
    </div>
</template>