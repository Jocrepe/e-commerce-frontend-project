<script setup>
import { RouterLink } from 'vue-router';

import { useAdminUserStore } from '@/stores/admin/user';

import AdminLayout from '@/components/admin/AdminLayout.vue';
import Table from '@/components/admin/table.vue'

const adminUserStore = useAdminUserStore()

const changeStatus = (index) => {
    let selectedUser = adminUserStore.list[index]
    if (selectedUser.status === 'active') {
        selectedUser.status = 'inactive'
    } else {
        selectedUser.status = 'active'
    }
    adminUserStore.updateUser(index, selectedUser)
}

</script>

<template>

    <AdminLayout>

            <div class="text-2xl font-bold my-9">User Management</div>
            <div class="divider"></div>

            <Table :headers="['Name', 'Role', 'Status', 'UpdateAt', '']">
                <tr v-for="(user, index) in adminUserStore.list">
                    <td>{{ user.fullname }}</td>
                    <td>{{ user.role }}</td>
                    <td><div class="badge" :class="user.status === 'active' ? 'badge-success' : 'badge-error'">{{ user.status }}</div></td>
                    <td>{{ user.updateAt }}</td>
                    <td>
                        <div class="flex gap-3">
                            <RouterLink :to="{name: 'admin-user-update', params: {id: index}}">
                                <button class="btn btn-neutral">Edit</button>
                            </RouterLink>
                            <button @click="changeStatus(index)" class="btn btn-neutral">{{ user.status === 'inactive' ? 'Enable': 'Disable' }}</button>
                        </div>
                    </td>
                </tr>
            </Table>

    </AdminLayout>

</template>