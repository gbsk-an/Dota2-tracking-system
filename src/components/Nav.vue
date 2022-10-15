<template>
    <div class="nav">
        <button
            @click="showMenu"
            v-if="menuVisibility != true"
            type="button"
            class="show-menu-button"
        />
        <Sidebar 
            v-model:showSidebar="menuVisibility"
        />
        <div v-if="menuVisibility != true" class="nav-logo">
            <router-link to="/">
                <img src="../assets/svg/Logo-duo.svg" alt="OpenDota logo icon" />
            </router-link>
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
    z-index: 100;
}
.show-menu-button {
    width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url("@/assets/svg/Nav.svg");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    &:hover {
        background-image: url("@/assets/svg/Nav-lime.svg");
    }
}
</style>