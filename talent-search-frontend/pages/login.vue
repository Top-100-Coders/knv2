<template>
     <div class=" flex items-center justify-end bg-blue-700 w-screen h-screen">
      <div class="h-full w-1/2 flex items-center justify-center">
        <img src="/img/undraw.png" />
      </div>
      <div class="p-12 gap-6 bg-white rounded-lg flex flex-col items-center justify-center w-1/2 py-96">
        <div class="flex flex-col items-center justify-center gap-2">
            <Logo />
            <h1 class="opacity-80 text-sm">Welcome Back. Enter the credentials.</h1>
        </div>
        <div class="flex flex-col items-center justify-center gap-3 p-6 w-4/6">
          <div class="flex flex-col bg-grey rounded w-full">
            <span class="font-montserrat p-2 pb-0 text-xs opacity-80">Username</span>
          <input
            placeholder=""
            type="text"
            class="focus:outline-none h-8 w-full bg-transparent px-2 rounded"
          />
          </div>
          <div class="flex flex-col bg-grey rounded w-full">
            <span class="font-montserrat p-2 pb-0 text-xs opacity-80">Password</span>
          <input
            placeholder=""
            type="text"
            class="focus:outline-none h-8 w-full bg-transparent px-2 rounded"
          />
          </div>
          <!-- <div class="flex gap-2">
            <input type="checkbox">
            <span>Remember me</span>
          </div> -->
          <button class="focus:outline-none font-bold bg-blue-700/80 hover:bg-blue-700 cursor-pointer text-white px-14 py-4 w-full rounded">
            LOGIN
          </button>
        </div>
      </div>
    </div>
</template>
<script setup>
   definePageMeta({
        layout: 'headerless'
   })
</script>