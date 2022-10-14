<template>
    <div class="fixed-bottom">
        <button type="button" class="button-top">
        </button>
    </div>
    
</template>

<script>
export default {
    name: 'button-top',
}
</script>

<style lang="scss" scoped>
.button-top {
    position: relative;
    width: 64px;
    height: 64px;
    padding: 1.25em;
    background-color: var(--bright-violet);
    border-radius: 10px;
    box-shadow: 0px 15px 30px -15px rgba(16, 0, 37, 0.5);
    transition: all .4s;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        background-image: url("@/assets/svg/Arrow-top.svg");
        background-repeat: no-repeat;
        background-position: center;
        top: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
    &:hover {
        background-color: var(--lime);
        transition: all .4s;
    }
}
.fixed-bottom {
    position: fixed;
    right: 2em;
    bottom: 5em;
}
</style>