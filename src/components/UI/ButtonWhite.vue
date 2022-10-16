<template>
  <button type="button" class="button-white">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "button-white",
};
</script>

<style lang="scss" scoped>
.button-white {
  width: fit-content;
  background: var(--white);
  border-radius: 4px;
  color: var(--black);
  font-family: var(--font);
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
}
</style>
