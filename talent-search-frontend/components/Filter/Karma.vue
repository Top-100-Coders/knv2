<template>
    <div class="w-full flex flex-col bg-m-black-light rounded px-4 py-3">
      <div
        class="w-full flex justify-between cursor-pointer items-center"
        @click="toggle = !toggle"
      >
        <span class="font-semibold">{{ category.name }}</span>
        <SVGDown
          :class="`${toggle ? 'rotate-180' : ''} transition-all duration-500`"
        />
      </div>
      <div class="w-full flex flex-col gap-1 mb-2 mt-4" v-if="toggle">
        <input type="range" min="1" max="100" v-model="slider"/>
        <div class="flex justify-center">
            <span> {{ slider*100 }} Karma</span>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  const { category } = defineProps(["category"]);
  const emit = defineEmits(["update"]);
  const toggle = ref(true);
  const slider = ref(50);

  defineExpose({
    slider,
  })
  </script>
  