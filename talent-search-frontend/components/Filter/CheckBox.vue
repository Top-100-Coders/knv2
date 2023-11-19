<template>
    <div 
      class="relative w-5 h-5 flex items-center justify-center rounded" 
      :class="`${modelValue ? 'bg-green text-black' : 'bg-black/10'}`" 
      @click="toggle"
    >
      <SVGDropSelected v-if="modelValue" :size="'26'" class="pl-0.5 absolute" />
    </div>
  </template>
  
  <script setup>
  const { value, index } = defineProps(['value', 'index']);
  const modelValue = ref(value);
  const emit = defineEmits(['update']);
  
  const toggle = () => {
    modelValue.value = !modelValue.value;
    emit('update', index, modelValue.value);
  };
  </script>