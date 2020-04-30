<template>
  <div>
    <button @click="isOpen = !isOpen">
      Toggle
    </button>
    
    <collapse-transition>
      <div v-show="isOpen">
        This div will open and close smoothly!
      </div>
    </collapse-transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen = false, // closed by default
      }
    }
  }
</script>

<style lang="scss">
    @import "./accordion.scss";
</style>