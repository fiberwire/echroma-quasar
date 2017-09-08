<template>
  <div>
    <svg>
      <path v-bind:key="path.d" v-for="path of painting.path" :d="path.d">
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
