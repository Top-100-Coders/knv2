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
        <div
          v-for="(option, index) in category.options"
          :key="index"
          class="flex items-center cursor-pointer gap-4"
        >
          <FilterCheckBox
            :modelValue="option.selected"
            :index="index"
            @update="(i, x) => select(i, x)"
          />
          <span>{{ option.name }}</span>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  const { category } = defineProps(["category"]);
  const emit = defineEmits(["update"]);
  const toggle = ref(true);
  
  function select(index, value) {
    category.options[index].selected =
      value === undefined ? !category.options[index].selected : value;
    emit(
      "update",
      category.options.filter((x) => x.selected).map((x) => x.filter)
    );
  }
  </script>
  