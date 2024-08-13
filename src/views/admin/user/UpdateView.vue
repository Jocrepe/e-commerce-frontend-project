<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';

import { useAdminUserStore } from '@/stores/admin/user';

import AdminLayout from '@/components/admin/AdminLayout.vue';

const adminUserStore = useAdminUserStore()
const route = useRoute()
const router = useRouter()

const userIndex = ref(-1)

onMounted(() => {
    if (route.params.id) {
        userIndex.value = parseInt(route.params.id)
        const selectedUser = adminUserStore.list[userIndex.value]
        
        userData.fullname = selectedUser.fullname
        userData.role = selectedUser.role
        userData.status = selectedUser.status
    }
})

const FormData = [
    {
        name: 'Name',
        field: 'fullname',
        type: 'text'
    },
    {
        name: 'Role',
        field: 'role',
        type: 'select',
        dropdownList: ['admin', 'moderator', 'user']
    },
    {
        name: 'Status',
        field: 'status',
        type: 'select',
        dropdownList: ['active', 'inactive']
    }
]

const userData = reactive({
    fullname: '',
    role: '',
    status: ''
})

const updateUser = () => {
    adminUserStore.updateUser(userIndex.value, userData)
    alert('Update Complete!')
    router.push({name: 'admin-user-list'})
}


</script>

<template>

    <AdminLayout>

        <div>
            <div class="shadow-xl p-10">
                <div class="text-2xl font-semibold">Edit User</div>
                <div class="divider"></div>

                <label v-for="form in FormData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-if="form.type === 'text'" v-model="userData[form.field]" type="text" class="input input-bordered w-full" />
                    <select v-else v-model="userData[form.field]" class="select select-bordered w-full">
                        <option v-for="item in form.dropdownList">{{ item }}</option>
                    </select>
                </label>

                <div class="flex justify-end gap-2 my-5">
                    <RouterLink :to="{name: 'admin-user-list'}">
                        <button class="btn btn-ghost">Back</button>
                    </RouterLink>
                    <button @click="updateUser" class="btn btn-secondary">Update</button>
                </div>


            </div>
        </div>

    </AdminLayout>

</template>