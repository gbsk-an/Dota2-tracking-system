<template>
    <input class="input-default">
</template>

<script>
    export default {
        name: "input-default"
    }
</script>

<style lang="scss" scoped>
.input-default {
    position: relative;
    display: block;
    width: 100%;
    color: var(--white);
    background-color: var(--dark-violet);
    border-radius: 4px 4px 1px 1px;
    border-bottom: 2px solid var(--white);
    background-clip: padding-box;
    background-image: url("@/assets/svg/Search.svg");
    background-repeat: no-repeat;
    background-position: 98%;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    &:hover {
        border-bottom: 2px solid var(--lime);
    }
}
</style>