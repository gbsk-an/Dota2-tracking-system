<template>
  <button type="button" class="authorization-button">Вход</button>
</template>

<script>
export default {
  name: "login-button",
};
</script>

<style lang="scss" scoped>
.authorization-button {
  position: relative;
  width: 100%;
  padding: 1em 8.5em 1em 10em;
  background: rgba(16, 0, 37, 0.05);
  border: 2px solid var(--white);
  backdrop-filter: blur(16px);
  color: var(--white);
  font-family: var(--font);
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("@/assets/svg/Authorization.svg");
    background-repeat: no-repeat;
    background-position: center;
    left: 8em;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  &:hover {
    border: 2px solid var(--lime);
    color: var(--lime);
  }
}
.authorization-fixed-top {
  position: fixed;
  top: 2.5em;
  right: 2.5em;
}
</style>
