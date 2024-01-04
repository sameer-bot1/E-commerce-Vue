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
  background-color: rgb(31, 149, 189);
  padding: 2px 7px;
  border: 2px solid grey;
  font-size: 1.2rem;
  color: black;
  border-radius: 8px;
}

button:hover {
  background-color: #083e46;
  border-color: #083e46;
}
</style>
