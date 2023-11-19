<template>
    <div class="scrollHide h-screen w-full flex">
        <div class="w-1/2 h-full bg-blue-700">
          <div class="h-full w-full flex items-center justify-center transition ease-in-out" v-if="cadence === 1">
            <img src="/img/undraw_seeker.png" />
          </div>
          <div class="h-full w-full flex items-center justify-center transition ease-in-out" v-if="cadence === 2">
            <img src="/img/undraw_recruiter.png" />
          </div>
        </div>
        <div class="w-1/2 h-screen flex items-center justify-center">
            <div class="flex flex-col items-center justify-center gap-4">
            <Logo />
            <p class="w-1/2 text-center">Unlock Success with Our
            Streamlined Connections and Endless Opportunities.
            Your Path to Career Excellence Starts Here!</p>
            <div class="w-full">
            <div class=" w-1/2 px-2 py-2 mx-auto rounded flex text-base font-normal font-montserrat">
                        <div
                        :class="` transition duration-500 flex items-center justify-center ${cadence === 2 ? 'font-semibold bg-blue-700 text-white' : ' hover:bg-[#E3E3E3] border-b-2 '} rounded cursor-pointer w-1/2 text-center py-px md:py-2`"  @click="cadence = 2">
                            <p class="text-xxs md:text-base">RECRUITERS</p>
                        </div>
                        <div class="p-1"></div>
                        <div 
                        :class="` transition duration-500 ${cadence === 1 ? 'font-semibold bg-blue-700 text-white' : ' hover:bg-[#E3E3E3] border-b-2'} rounded cursor-pointer w-1/2 text-center py-px md:py-2`"  @click="cadence = 1">
                            <p class="text-xxs md:text-base">JOB SEEKERS</p>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center gap-3 p-6">
          <div class="flex flex-col bg-grey rounded w-1/2">
            <span class="font-montserrat p-2 pb-0 text-xs opacity-80">Username</span>
          <input
            placeholder=""
            type="text"
            class="focus:outline-none h-8 w-full bg-transparent px-2 rounded"
          />
          </div>
          <div class="flex flex-col bg-grey rounded w-1/2">
            <span class="font-montserrat p-2 pb-0 text-xs opacity-80">Email</span>
          <input
            placeholder=""
            type="text"
            class="focus:outline-none h-8 w-full bg-transparent px-2 rounded"
          />
          </div>
          <div class="flex flex-col bg-grey rounded w-1/2">
            <span class="font-montserrat p-2 pb-0 text-xs opacity-80">Password</span>
          <input
            placeholder=""
            type="text"
            class="focus:outline-none h-8 w-full bg-transparent px-2 rounded"
          />
          </div>
          <button class="focus:outline-none font-bold bg-blue-700/80 hover:bg-blue-700 cursor-pointer text-white px-14 py-4 w-1/2 rounded">
            SIGN UP
          </button>
        </div>
          </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const cadence=ref(1);
   definePageMeta({
        layout: 'headerless'
   })
</script>
