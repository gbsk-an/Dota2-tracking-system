<template>
  <!-- Content -->
  <router-view v-slot="{ Component }">
    <transition name="slide-down">
      <component :is="Component" />
    </transition>
  </router-view>
  
  <!-- Modals -->
  <AuthorizationModal v-if="isOpenedAuthModal" />
  <RegisterModal v-if="isOpenedRegisterModal" />
</template>

<script>
import RegisterModal from "@/components/RegisterModal";
import AuthorizationModal from "@/components/AuthorizationModal";
export default {
  name: "#app",
  components: {
    RegisterModal,
    AuthorizationModal,
  },
  computed: {
    isOpenedAuthModal() {
      return this.$store.getters["modals/isOpenedAuth"];
    },
    isOpenedRegisterModal() {
      return this.$store.getters["modals/isOpenedRegister"];
    },
  },
};
</script>

<style lang="scss">
:root {
  --lime: #bbdd00;
  --yellow: #eecd00;
  --orange: #fa7000;
  --violet: #301070;
  --ulta-dark-violet: #200050;
  --dark-violet: rgba(16, 0, 37, 0.25);
  --dark-violet-alt-3: rgba(16, 0, 37, 0.15);
  --bright-violet: #7540f0;
  --dark-violet-alt: rgba(48, 16, 112, 0.8);
  --bright-violet-gradient: linear-gradient(
    88.92deg,
    #7540f0 0.38%,
    #7b61ff 100%
  );
  --brightest-violet: #e0d8ff;
  --dark-grey: #404040;
  --light-grey: #e0e0e0;
  --grey: #808080;
  --white: #ffffff;
  --black: #000000;
  --font: "Inter", sans-serif;
  --sidebar-width: 385px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: "smooth";
}

body {
  font-family: "Inter", sans-serif;
  background-color: var(--ulta-dark-violet);
}

h1 {
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;
  background: linear-gradient(268.55deg, #ebc1ff 0%, #e0d8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 8px 16px rgba(16, 0, 37, 0.15);
  @media (max-width: 390px) {
    font-size: 24px;
    line-height: 29px;
  }
}
h2 {
  color: var(--brightest-violet);
  font-family: var(--font);
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-transform: uppercase;
}
p {
  color: var(--brightest-violet);
  font-family: var(--font);
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
}
.p-title {
  color: var(--brightest-violet);
  font-family: var(--font);
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
}
.p-yellow {
  color: var(--yellow);
  font-family: var(--font);
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
button,
input,
optgroup,
select,
textarea {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  font: inherit;
  color: inherit;
  letter-spacing: inherit;
}
a {
  text-decoration: none;
  color: var(--brightest-violet);
}
.uppercase {
  text-transform: uppercase;
}
.wrapper-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0 1.25em;
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    max-width: 240px;
  }
}
.flex {
  flex: 1 1 auto;
}
.bg-cover {
  background-image: linear-gradient(
      0deg,
      rgba(32, 0, 80, 1) 45%,
      rgba(196, 196, 196, 0.2) 100%
    ),
    url("@/assets/background.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity .6s ease-out;
}
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
	transition: .3s ease-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
	opacity: 0;
	transform: translateY(300px);
}
.slide-down-enter-active,
.slide-down-leave-active {
	transition: .7s ease-out;

}
.grow-in-enter-from,
.grow-in-leave-to {
	opacity: 0;
	transform: scale(0.3);
}
.grow-in-enter-active,
.grow-in-leave-active {
	transition: .3s ease-out;
}
.grow-out-enter-from,
.grow-out-leave-to {
	opacity: 0;
	transform: scale(1.5);
}
.grow-out-enter-active,
.grow-out-leave-active {
	transition: .3s ease-out;
}
</style>
