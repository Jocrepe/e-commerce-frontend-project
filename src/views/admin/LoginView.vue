<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="h-screen flex items-center">
        <div class="flex-1 max-w-3xl shadow-xl mx-auto p-8 my-5">
            <div class="flex flex-col items-center">
                <div class="text-2xl font-semibold">Admin Login</div>

                <div class="w-full">
                    <label class="form-control w-full my-5">
                        <div class="label">
                            <span class="label-text">Email</span>
                        </div>
                        <input type="text" placeholder="Email" class="input input-bordered w-full " />
                    </label>
                    <label class="form-control w-full ">
                        <div class="label">
                            <span class="label-text">Password</span>
                        </div>
                        <input type="password" placeholder="Password" class="input input-bordered w-full " />
                    </label>
                </div>

                <RouterLink class="w-full my-5 text-center" :to="{name: 'admin-dashboard'}">
                        <button class="btn btn-secondary w-1/2">Log in</button>
                </RouterLink>

            </div>
        </div>
    </div>
</template>