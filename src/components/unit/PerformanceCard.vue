<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ title: string, data: Array<any> }>()

const model = ref<string>('collapseCard')
</script>

<template lang="pug">
.performanceCard
  el-collapse.headrBorderBottom(v-model="model")
    el-collapse-item(:title="title" name="collapseCard")
      .flex.column
        .col.title.flex.between
          span Title
          span Views
        template(v-for="col in data")
          .col.flex.between
            span {{ col.title }}
            span {{ col.value }}

</template>

<style lang="scss">
.performanceCard {
  @include el-collapse-header-custom(font-size, 1.25rem);
  @include el-collapse-header-custom(font-weight, 500);
  @include el-collapse-header-custom(padding, 0 1rem);
}
</style>

<style lang="scss" scoped>
.performanceCard {
  border: $borderS;
  .col {
    font-size: 1rem;
    &.title {
      font-size: 1.125rem;
      font-weight: 500;
    }
  }
}
</style>