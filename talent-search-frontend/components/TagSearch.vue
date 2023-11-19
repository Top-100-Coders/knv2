<template>
    <div class="w-full flex items-center overflow-x-hidden">
        <div v-for="(item, i) in items" :key="i"  class="px-1 py-0.5 text-white font-xs rounded bg-blue-700 w-fit h-fit mr-1 flex gap-1 items-center cursor-pointer" @click="items.splice(i,1)"> 
            <span>
                {{ item }} 
            </span>
            <SvgCross :size="'16'"/>
        </div>
        <input
            placeholder="Search for Skills"
            type="text"
            v-model="search"
            @input="splitter"
            class="focus:outline-none flex-1 h-8 w-full bg-transparent rounded"
        />
    </div>
</template>
<script setup>
    const items = ref([]);
    const search = ref(null);
    function splitter(char) {
        if (char.data === ",") {
            items.value = [... new Set([...items.value, ...search.value.split(",")].filter(i => i))];
            search.value = "";
        }
        console.log(char.data, items.value);
    }
    defineExpose({
        items
    })
</script>