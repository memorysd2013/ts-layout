<script setup lang="ts">
import dayjs, { ManipulateType } from "dayjs";
import { ref, computed, onMounted } from "vue";

const props = defineProps<{ label: string; type?: ManipulateType; loading: boolean }>();
const emits = defineEmits(["emitDate"]);
const date = ref<number>();

const dateDisplay = computed(() => dayjs(date.value).format("MMMM D, YYYY"));

onMounted(() => {
  date.value = dayjs().valueOf();
});

const switchDate = (d: number) => {
  if (!props.loading) {
    date.value = dayjs(date.value).add(d, props.type).valueOf();
    emits("emitDate", date.value);
  }
};
</script>

<template lang="pug">
.dateRangeSwitch.flex.v-center.between
  i.icon.fa-solid.fa-arrow-left.pointer(@click="switchDate(-1)")
  p
    span(v-if="label") {{ label }}
    span.ml-8 {{ dateDisplay }}
  i.icon.fa-solid.fa-arrow-right.pointer(@click="switchDate(1)")

</template>

<style lang="scss" scoped>
.dateRangeSwitch {
  padding: 0.5rem;
  .icon {
    transition: all 0.2s;
    &:hover {
      color: $mainHoverC;
      transform: scale(1.2);
    }
  }
}
</style>
