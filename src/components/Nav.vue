<template>
    <div class="nav">
        <button
            @click="showMenu"
            v-if="menuVisibility != true"
            type="button"
            class="show-menu-button"
        />
        <Sidebar 
            v-model:show="menuVisibility"
        />
        <div v-if="menuVisibility != true" class="nav-logo">
            <img src="../assets/svg/Logo-duo.svg" alt="OpenDota logo icon" />
        </div>
    </div>
    
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
    name: 'nav',
    components: {
		Sidebar
	},
    data() {
        return {
            menuVisibility: false,
        }
    },
    methods: {
        showMenu() {
            this.menuVisibility = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.nav {
    position: fixed;
    top: 1.25em;
    left: 1.25em;
    display: flex;
    align-items: center;
    gap: 1.25em;
}
.show-menu-button {
    width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url("@/assets/svg/Nav.svg");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}
</style>