<template>
	<aside v-if="showSidebar" @click.stop="hideMenu" class="sidebar">
		<div class="sidebar-logo">
			<button 
				class="hide-menu-button" 
				@click.stop="hideMenu" 
			/>
			<router-link to="/">
				<img src="../assets/svg/Logo-duo.svg" alt="OpenDota logo icon" />
			</router-link>
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
			<button
				class="sidebar-button_authorization"
                @click="showModal"
            >
				Авторизация
			</button>
            <AuthorizationModal 
                v-model:show="modalVisibility"
            />
		</div>
	</aside>
</template>

<script>
import AuthorizationModal from '@/components/AuthorizationModal.vue';
export default {
    name: 'sidebar',
	components: {
    	AuthorizationModal,    
	},
	data() {
        return {
            modalVisibility: false,
        }
    },
    props: {
        showSidebar: {
            type: Boolean,
            default: false
        },
		show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideMenu() {
            this.$emit('update:showSidebar', false)
        },
		showModal() {
            this.modalVisibility = true;
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
	transition: all 14s;
	z-index: 100;

	&-logo {
    	display: flex;
		align-items: center;
		gap: 1.25em;
		margin-bottom: 3.625em;
		transition: 0.4s ease-in-out;
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
				&::after{
					background-image: url("@/assets/svg/Arrow-right-lime.svg");
				} 
			}

		}
	}
	&-button {
		&_authorization {
			position: relative;
			padding: 1em 1.25em 1em 3.375em;
			width: 100%;
			background: rgba(16, 0, 37, 0.05);
			border: 2px solid var(--white);
			backdrop-filter: blur(16px);
			color: var(--white);
			font-family: var(--font);
			font-weight: 500;
			font-size: 16px;
			line-height: 19px;
			cursor: pointer;
		
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
				&::before{
					background-image: url("@/assets/svg/Authorization-lime.svg");
				}
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
	transition: 0.4s ease-in-out;
	&:hover {
		background-image: url("@/assets/svg/Close-lime.svg");
	}
}
</style>