<template>
	<aside v-if="show" @click.stop="hideMenu" class="sidebar">
		<div class="sidebar-logo">
			<button 
				class="hide-menu-button" 
				@click.stop="hideMenu" 
			/>
			<img src="../assets/svg/Logo-duo.svg" alt="OpenDota logo icon" />
		</div>
		<div class="flex" @click.stop>
			<div class="sidebar-search-field">
			<input-default 
				class="sidebar-search-field_input"
				placeholder="Найти профиль"
			/>
			</div>
			<div class="sidebar-menu">			
				<router-link to="/TeamPage">
					<p class="sidebar-menu_item">Список команд</p>
				</router-link>
				<router-link to="/MatchesPage">
					<p class="sidebar-menu_item">Список матчей</p>
				</router-link>
				<router-link to="/">
					<p class="sidebar-menu_item">Сравнение команд</p>
				</router-link>
			</div>
		</div>		
		<div class="sidebar-button">
			<login-button 

			/>
		</div>
	</aside>
</template>

<script>
export default {
    name: 'sidebar',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideMenu() {
            this.$emit('update:show', false)
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex: 1 0 auto;
	flex-direction: column;
	justify-content: space-between;
	background-color: var(--dark-violet-alt);
	width: var(--sidebar-width);
	overflow: hidden;
	min-height: 100vh;
	padding: 1.25em;
	transition: 0.2s ease-in-out;

	&-logo {
    	display: flex;
		align-items: center;
		gap: 1.25em;
		margin-bottom: 3.625em;
	}

	&-search-field {
		margin-bottom: 2em;
		&_input {
			padding: .75em .6em;
		}
	}

	&-menu {
		display: flex;
		flex-direction: column;
		gap: 1.875em;
		&_item {
			position: relative;
			color: var(--white);
			font-weight: 700;
			
			&::after {
				content: "";
				position: absolute;
				width: 24px;
				height: 24px;
				background-image: url("@/assets/svg/Arrow-right.svg");
				background-repeat: no-repeat;
				background-position: center;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				cursor: pointer;
			}

			&:hover {
				color: var(--lime);
			}

		}
	}

}
.hide-menu-button {
	width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url("@/assets/svg/Close-white.svg");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}
</style>