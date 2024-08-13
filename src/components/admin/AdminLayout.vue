<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const activeMenu = ref('')

onMounted(() => {
    activeMenu.value = route.name
})

const sidebarMenus = [
    {
        name: 'DashBoard',
        routeName: 'admin-dashboard'
    },
    {
        name: 'User',
        routeName: 'admin-user-list'
    },
    {
        name: 'Product',
        routeName: 'admin-product-list'
    },
    {
        name: 'Order',
        routeName: 'admin-order-list'
    },
    {
        name: 'Log out',
        routeName: 'admin-login'
    }
]

</script>

<template>
    <div>
        <!-- site bar -->
        <div>
            <div class="drawer drawer-open">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content mx-10">

                    <!-- content -->
                    <slot></slot>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                    <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <!-- Sidebar content here -->
                        <li class="text-2xl font-semibold my-2">Back office</li>
                        <li v-for="menu in sidebarMenus">
                            <RouterLink :class="menu.routeName === activeMenu ? 'active my-2' : 'my-2'" 
                            :to="{ name: menu.routeName }">
                                {{ menu.name }}
                            </RouterLink>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>