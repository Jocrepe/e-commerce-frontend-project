import { defineStore } from 'pinia'

export const useAdminUserStore = defineStore('admin-user', {
    state: () => ({
        list: [
            {
                fullname: 'Crepe',
                role: 'admin',
                status: 'inactive',
                updateAt: (new Date()).toISOString()
            }
        ]
    }),
    actions: {
        getUser(index) {
            return this.list[index]
        },
        updateUser(index, userData) {
            const fields = ['fullname', 'role', 'status']
            for (let field of fields) {
                this.list[index][field] = userData[field]
            }
            this.list[index].updateAt = (new Date()).toISOString()
        }
    }
})