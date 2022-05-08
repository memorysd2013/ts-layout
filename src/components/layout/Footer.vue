<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
</script>

<template lang="pug">
.footer.flex.between
  h3 Element Layout
  p footer

</template>

<style lang="scss" scoped>
.footer {
  border-top: $borderS;
  padding: 2rem 1.5rem 4rem;
}
</style>