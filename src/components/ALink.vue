<template>
  <div @click="goLink" style="color: #646cff;cursor: pointer;">{{ url }}</div>
</template>
<script setup lang="ts">
const props = defineProps({
  url: String,
  target: {
    default: '_blank'
  }
})
const goLink = () => {
  window.open(props.url, props.target)
}
</script>