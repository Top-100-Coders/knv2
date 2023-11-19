<template>
    <div v-if="view" class="absolute top-0 left-0 h-screen w-full bg-black/80">
        <div class="fixed top-0 bg-white w-3/8 flex justify-end h-screen">
            <div class="w-64 h-screen bg-m-black py-8 px-4 text-black flex flex-col gap-4">
                <div class="flex justify-between mb-2">
                    <span class="font-semibold text-xl">Filter by</span>
                    <SVGClose
                    class="text-black/80 hover:text-black cursor-pointer"
                    :size="'32'"
                    @click="closeFn"
                    />
                </div>
                <FilterKarma :category="{name: 'Minimum Karma'}" ref="karma"/>
                <FilterSection v-for="c in categories" :key="c.name" :category="c" />
            </div>    
        </div>
    </div>
</template>
<script setup>
const view = ref(false);
const emit = defineEmits(["update"]);
const karma = ref(null);
const categories = [
  {
    name: "Sort By",
    options: [
      {
        name: "Relevance",
        selected: false,
      },
      {
        name: "Karma",
        selected: false,
      },
    ],
  },
  
];
function toggleView() {
  view.value = !view.value;
}

function closeFn() {
      view.value = false;
      emit("update", {
          karma: karma.value.slider*100,
      });
}

defineExpose({
  toggleView,
});
</script>
