<template>
  <div>
    <svg>
      <path v-for="path of painting.paths" v-bind:d="path.d">
      </path>
    </svg>
  </div>
</template>

<script>
  import Painting from './Painting';
  export default Painting;
</script>

<style>
</style>
