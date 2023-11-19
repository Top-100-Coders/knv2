<template>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
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
  
  
  