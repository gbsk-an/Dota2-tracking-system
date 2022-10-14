<template>
	<div class="app">
		
		<!-- Content -->
		<router-view>
				
		</router-view>
	</div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import StartPage from '@/views/StartPage.vue'
import TeamPage from '@/views/TeamPage.vue'
export default {
    name: '#app',
	components: {
		MainLayout,
		StartPage,
		TeamPage
	},
    data() {
        return {

        }
    },
}
</script>

<style lang="scss">
:root {
	--lime: #BBDD00;
	--orange: #FA7000;
  	--violet: #301070;
	--dark-violet: rgba(16, 0, 37, 0.25);
	--bright-violet: #7540F0;
	--dark-violet-alt: rgba(48, 16, 112, 0.8);
	--bright-violet-gradient: linear-gradient(88.92deg, #7540F0 0.38%, #7B61FF 100%);
	--brightest-violet: #E0D8FF;
	--dark-grey: #404040;
	--light-grey: #E0E0E0;
	--grey:  #808080;;
	--white: #FFFFFF;
	--black: #000000;
	--font: 'Inter', sans-serif;;
	--sidebar-width: 385px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Inter', sans-serif;
	width: 100%;
}
.app {
	background-image: url('@/assets/background.png');
	background-repeat: no-repeat;
	background-size: cover;
}
h1 {
	font-weight: 700;
	font-size: 48px;
	line-height: 58px;
	text-transform: uppercase;
	background: linear-gradient(268.55deg, #EBC1FF 0%, #E0D8FF 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-shadow: 0px 8px 16px rgba(16, 0, 37, 0.15);
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
  font: inherit; /* По дефолту, шрифтовые свойства, для этих элементов не наследуются */
  color: inherit;
  letter-spacing: inherit;
}
a {
	text-decoration: none;
	color: var(--brightest-violet);
}
.wrapper-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0 1.25em;  
}
.flex {
	flex: 1 1 auto;
}
</style>