<template>
    <svg :width="width || size "
      :height="height || size "
      viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.2927 8.46924L8.76527 16.0846L6.1543 13.0384" stroke="currentColor" stroke-width="3.04614" stroke-linecap="round" stroke-linejoin="round"/>
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