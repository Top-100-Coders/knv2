<template>
    <div class="flex justify-between px-16">
        <Logo @click="router.push('/')" class="cursor-pointer" />
        <div class="flex gap-4">
            <button class="px-8 bg-blue-700/80 hover:bg-blue-700 cursor-pointer text-white whitespace-nowrap font-semibold" @click="router.push('/login')">Sign In</button>
            <button class="px-8 text-black/60 hover:text-black cursor-pointer whitespace-nowrap font-semibold" @click="router.push('/register')">Sign Up</button>
        </div>
    </div>
</template>
<script setup>
   const router = useRouter();
</script>