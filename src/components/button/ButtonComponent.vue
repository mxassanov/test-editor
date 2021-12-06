<script setup>
import { computed } from '@vue/reactivity'

const props = defineProps({
  button: Object,
})

const { icon, desc, action, val, label } = props.button

const value = computed(() =>
  action === 'insertImage' ? prompt(`Введите значение для ${action}`, val) : val
)

const onClick = () => {
  document.execCommand(action, false, value.value)
}
</script>

<template>
  <button @click.prevent="onClick" :title="desc">
    <component v-if="icon" v-bind:is="`${icon}`" />
    {{ label }}
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  background-color: #282828;
  color: #639eff;
  border: none;
  margin-right: 10px;
  border-radius: 4px;
}
button:hover {
  background-color: #353434;
  color: #80a8e9;
}
</style>
