<template>
    <div class="bg-cover">
        <div class="wrapper-grid hero">        
            <div class="hero-logo">
                <img src="../assets/svg/OpenDota-logo.svg" alt="OpenDota logo icon" />
                <img src="../assets/svg/Logo.svg" alt="OpenDota logo" />
            </div>
            <div class="hero-search-field">
                <input-default 
                    class="hero-search-field_input"
                    placeholder="Поиск по сайту..."
                />
            </div>
            <div class="hero-search-buttons">
                <router-link to="/MatchesPage">
                    <button-white class="hero-search-buttons_style">Список матчей</button-white>
                </router-link>
                <router-link to="/TeamPage">
                   <button-white  class="hero-search-buttons_style">Список команд</button-white> 
                </router-link>                
            </div>
            <div class="hero-info">
                <div class="hero-info_block">
                    <img src="../assets/svg/Icon_01.svg" alt="Icon" />
                    <h2 class="hero-info_block-title">Открытый источик</h2>
                    <p>Вся информация и данные для сайта берутся из OpenSource данных.</p>
                </div>
                <div class="hero-info_block">
                    <img src="../assets/svg/Icon_02.svg" alt="Icon" />
                    <h2 class="hero-info_block-title">Подробные данные</h2>
                    <p>Анализ файлов повторов предоставляет очень подробные данные о матче.</p>
                </div>
                <div class="hero-info_block">
                    <img src="../assets/svg/Icon_03.svg" alt="Icon" />
                    <h2 class="hero-info_block-title">Бесплатно</h2>
                    <p>Серверы финансируются спонсорами, а код поддерживают волонтеры, поэтому услуга предоставляется бесплатно.</p>
                </div>
            </div>
            <authorization-button @click="showAuthModal"/>
            <button-top />
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
    name: 'start-page',
    components: {
        Footer
    },
    data() {
        return {
            authModal: { isOpened: false },
            registrationModal: { isOpened: false }
        }
    },
    methods: {
        showAuthModal() {
            this.$store.commit('modals/setIsOpenedAuth', true)
        }
    }
}
</script>

<style lang="scss" scoped>
.hero {
    margin: 0 auto;
    padding-bottom: 7.75em;

    &-logo {
        grid-column: 4 / span 6;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.8em;
        margin-bottom: 9.1em;
        margin-top: 12.5em;
    }

    &-search-field {
        grid-column: 4 / span 6;
        justify-content: center;
        margin-bottom: 3.125em;
        &_input {
            padding: 1.6em 1em;
        }
    }
    &-search-buttons {
        grid-column: 4 / span 6;
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 1.2em;
        margin-bottom: 3.125em;

        &_style {
            padding: .9em 5.6em;
        }
    }
    &-info {
        grid-column: 3 / span 8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5em;

        &_block {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            text-align: center;
            max-width: 370px;
            &-title {
                padding: 1.5625em 0;
            }
        }
    }
}
</style>
