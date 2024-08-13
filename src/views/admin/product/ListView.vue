<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useAdminProductStore } from '@/stores/admin/product';

import AdminLayout from '@/components/admin/AdminLayout.vue';
import close from '@/components/admin/icon/close.vue'
import edit from '@/components/admin/icon/edit.vue'
import Table from '@/components/admin/table.vue'

const route = useRoute()

const adminProductStore = useAdminProductStore()


onMounted(() => {
    adminProductStore.loadProduct()

})

</script>

<template>

    <AdminLayout>

        <div>

            <div class="flex justify-between my-4 items-center">
                <div class="text-2xl font-bold my-5">Product</div>
                <RouterLink :to="{ name: 'admin-product-create' }"><button class="btn btn-primary">Add product</button>
                </RouterLink>
            </div>

            <div class="divider"></div>

            <div class="overflow-x-auto">
                <Table :headers="['Name', 'Image', 'Price', 'Quantity', 'Status', 'UpdateAt']">
                    <tr v-for="(product, index) in adminProductStore.list">
                        <th>{{ product.name }}</th>
                        <th><img :src="product.image" class="w-16"></th>
                        <td>{{ product.price }}</td>
                        <td>{{ product.remainQuantity }} / {{ product.quantity }}</td>
                        <td>
                            <div :class="product.status === 'Open' ? 'badge badge-success' : 'badge badge-error'">{{
                                product.status }}</div>
                        </td>
                        <td>{{ product.updateAt }}</td>
                        <td>
                            <div class="flex">
                                <RouterLink :to="{ name: 'admin-product-update', params: { id: index } }">
                                    <edit class="btn btn-ghost"></edit>
                                </RouterLink>

                                <div>
                                    <close @click="adminProductStore.removeProduct(index)" class="btn btn-ghost">
                                    </close>
                                </div>

                            </div>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>

    </AdminLayout>

</template>