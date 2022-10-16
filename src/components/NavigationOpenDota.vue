<template>
  <div class="nav">
    <button
      @click="showMenu"
      v-if="menuVisibility != true"
      type="button"
      class="show-menu-button"
    />
    <Sidebar v-model:showSidebar="menuVisibility" />
    <div v-if="menuVisibility != true" class="nav-logo">
      <router-link to="/">
        <img
          src="../assets/svg/Logo-duo.svg"
          class="nav-logo_image"
          alt="OpenDota logo icon"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "navigation-openDota",
  components: {
    Sidebar,
  },
  data() {
    return {
      menuVisibility: false,
    };
  },
  methods: {
    showMenu() {
      this.menuVisibility = true;
    },
  },
};
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

  @media (max-width: 390px) {
    top: 0;
    left: 0;
    right: 0;
    height: 52px;
    padding: 0.8em 1.25em;
    background: rgba(32, 0, 80, 0.4);
    backdrop-filter: blur(8px);
  }
  &-logo {
    transition: all 0.4s ease-in;
    @media (max-width: 390px) {
      display: none;
    }
  }
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
