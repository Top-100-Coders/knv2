<template>
    <svg :width="width * 0.75 || size  * 0.75"
      :height="height * 0.75 || size  * 0.75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 21L19 21C20.11 21 21 20.11 21 19L21 15L19 15L19 19L5 19L5 5L19 5L19 9L21 9L21 5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3L5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21072 3.96086 3 4.46957 3 5L3 19C3 20.11 3.9 21 5 21ZM13.92 8.42L12.5 7L7.5 12L12.5 17L13.92 15.59L11.33 13L21 13L21 11L11.33 11L13.92 8.42Z" fill="currentColor" style="fill:currentColor;fill:currentColor;fill-opacity:1;"/>
</svg>

</template>
<script>

export default {
  props: {
    size: {
      type: String,
      default() {
        return '24'
      },
    },
    width: {
      type: String,
      default() {
        return null
      },
    },
    height: {
      type: String,
      default() {
        return null
      },
    },
  },
}
</script>