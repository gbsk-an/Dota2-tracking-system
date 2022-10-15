<template>
    <div class="bg-gradient">
        <slot>

        </slot>
    </div>
</template>

<script>
    export default {
        name: "bg-gradient"
    }
</script>

<style scoped>
.bg-gradient {
    background-color: linear-gradient(0deg, #100025 0%, rgba(196, 196, 196, 0) 100%);
}
</style>