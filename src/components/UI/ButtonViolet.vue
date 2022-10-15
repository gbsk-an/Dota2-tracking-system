<template>
    <button type="button" class="button-violet">
        <slot>
            
        </slot>
    </button>
</template>

<script>
export default {
    name: 'button-violet',
}
</script>

<style lang="scss" scoped>
.button-violet {
    padding: .9em 2.5em;
    max-width: 128px;
    max-height: 50px;
    background: var(--bright-violet);
    border-radius: 4px;
    color: var(--white);
    font-family: var(--font);
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;

    &:hover {
        background: var(--lime);
    }
}
</style>