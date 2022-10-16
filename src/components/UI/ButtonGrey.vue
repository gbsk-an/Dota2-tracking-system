<template>
  <button type="button" class="button-grey">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: "button-grey",
};
</script>

<style lang="scss" scoped>
.button-grey {
  width: fit-content;
  background: var(--dark-grey);
  border-radius: 4px;
  color: var(--gray);
  font-family: var(--font);
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
}
</style>
