<script setup>
import { ref, onMounted } from 'vue';

import UserLayout from '@/components/user/UserLayout.vue'

const profileImageUrl = ref('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp')
const email = ref('')
const name = ref('')

onMounted(() => {
    let profileData = localStorage.getItem('profile-data')
    if (profileData) {
        profileData = JSON.parse(profileData)
        profileImageUrl.value = profileData.imageUrl
        email.value = profileData.email
        name.value = profileData.name
    }
})

const handleFileUpload = (event) => {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            profileImageUrl.value = e.target.result
        }
        reader.readAsDataURL(file)
    }

}

const updateProfile = () => {
    const profileData = {
        imageUrl: profileImageUrl.value,
        email: email.value,
        name: name.value
    }
    localStorage.setItem('profile-data', JSON.stringify(profileData))
    alert('update success!')
}

</script>

<template>
    <div>
        <UserLayout>
            <div class="border border-gray-400 shadow-xl w-full max-w-4xl mx-auto p-10 my-10">

                <div class="text-xl font-semibold">Edit profile</div>

                <div class="flex flex-col items-center">
                    <div class="avatar p-5">
                        <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <img :src="profileImageUrl" />
                        </div>
                    </div>

                    <div>
                        <input class="my-3" type="file" @change="handleFileUpload">
                    </div>

                    <div class="w-full">
                        <label class="form-control w-full">
                            <div class="label">
                                <span class="label-text">Email</span>
                            </div>
                            <input type="text" placeholder="Type here" v-model="email" class="input input-bordered w-full" />
                            <div class="label">
                                <span class="label-text">Name</span>
                            </div>
                            <input type="text" placeholder="Type here" v-model="name"class="input input-bordered w-full" />
                        </label>
                    </div>

                    <div class="w-full my-5 text-center"><button @click="updateProfile" class="btn btn-primary w-1/2">Update profile</button></div>

                </div>
            </div>
        </UserLayout>
    </div>
</template>