<template>
    <input class="input-white">
</template>

<script>
    export default {
        name: "input-white"
    }
</script>

<style lang="scss" scoped>
.input-white {
    display: block;
    width: 100%;
    color: var(--black);
    background-color: var(--white);
    background-clip: padding-box;
    border-bottom: 2px solid var(--light-grey);
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    &:hover {
        border-bottom: 2px solid var(--black);
    }
}
</style>