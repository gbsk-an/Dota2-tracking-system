<template>
    <div class="authorization-fixed-top">
        <button 
            type="button" 
            class="authorization-button"
        >
            Авторизация
        </button>
    </div>

</template>

<script>
export default {
    name: 'authorization-button',
}
</script>

<style lang="scss" scoped>
.authorization-button {
    position: relative;
    padding: 1em 1.25em 1em 3.375em;
    background: rgba(16, 0, 37, 0.05);
    border: 2px solid var(--white);
    backdrop-filter: blur(16px);
    color: var(--white);
    font-family: var(--font);
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    transition: all .5s;

    &::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background-image: url("@/assets/svg/Authorization.svg");
        background-repeat: no-repeat;
        background-position: center;
        left: 1em;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    &:hover {
        border: 2px solid var(--lime);
        color: var(--lime);
        transition: all .4s;
        &::before{
            background-image: url("@/assets/svg/Authorization-lime.svg");
            transition: all .5s;
        }
    }
}
.authorization-fixed-top {
    position: fixed;
    top: 2.5em;
    right: 2.5em;
}
</style>