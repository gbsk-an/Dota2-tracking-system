<template>
  <button type="button" class="button-analysis">Анализ</button>
</template>

<script>
export default {
  name: "button-analysis",
};
</script>

<style lang="scss" scoped>
.button-analysis {
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 1.25em 0.8em 1.25em 3.375em;
  background: var(--white);
  border-radius: 4px;
  color: var(--black);
  font-family: var(--font);
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background-image: url("@/assets/svg/Analysis-black.svg");
    background-repeat: no-repeat;
    background-position: center;
    left: 1em;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
