<template>
  <button aria-label="button" v-bind="$attrs">
    {{ btnvalue }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    btnvalue: String,
  },
};
</script>

<style scoped>
button {
  border: none;
  background-color: grey;
  padding: 2px 10px;
  border: 2px solid grey;
  font-size: 1.7rem;
  color: black;
}

button:hover {
  background-color: #083e46;
  border-color: #083e46;
}
</style>
