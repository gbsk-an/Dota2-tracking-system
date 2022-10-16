<template>
    <div class="win-badge">
        <img src="@/assets/svg/Radiant.svg" width="24" height="24" />
        <p class="win-badge_title">Победа: Radiant</p>
    </div>
</template>

<script>
    export default {
        name: 'win-badge'
    }
</script>

<style lang="scss" scoped>
.win-badge {
    display: flex;
    align-items: center;
    gap: 0 0.6em;
    width: fit-content;
    height: fit-content;
    padding: 0.6em;
    border-radius: 10px;
    background-color: var(--white);

    &_title {
        color: var(--orange);
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        opacity: 70%;
    }
}
</style>