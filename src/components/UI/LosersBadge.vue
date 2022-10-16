<template>
  <div class="losers-badge">
    <p>Проигравшие</p>
  </div>
</template>

<script>
export default {
  name: "losers-badge",
};
</script>

<style lang="scss" scoped>
.losers-badge {
  padding: 0.3em 0.9em;
  color: var(--orange);
  background: rgba(250, 112, 0, 0.25);
  border-radius: 30px;
}
</style>
