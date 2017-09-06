<template>
  <div class="hello">
    <svg>
      <g>
        <path d="M0 0 C 10 10 20 20 30 10 Z" stroke="black" fill="black"></path>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: 'Andrew'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '~variables'

.hello
  margin-top 50px
  a
    color #35495E

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px
</style>
