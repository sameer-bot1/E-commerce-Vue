<template>
  <div class="sub-heading">
    <h2>{{ heading }}</h2>
    <p>{{ subHeading }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutHeader",
  props: {
    heading: String,
    subHeading: String,
  },
};
</script>

<style scoped>
.sub-heading {
  background-color: lightblue;
  color: Black;
  height: 20vh;
  display: grid;
  place-content: center;
  text-align: center;
  margin-bottom: 2.5rem;
}

.sub-heading p {
  font-size: 1rem;
  /* color: var(--grey); */
}
</style>