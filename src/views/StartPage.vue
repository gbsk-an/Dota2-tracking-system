<template>
  <div class="bg-cover">
    <NavigationOpenDota class="navigation-start-page" />
    <div class="wrapper-grid hero">
      <div class="hero-logo">
        <picture>
          <source
            srcset="../assets/svg/Logo-mini.svg"
            media="(max-width: 390px)"
          />
          <img src="../assets/svg/Logo-large.svg" alt="OpenDota logo" />
        </picture>
      </div>
      <div class="hero-search-field">
        <input-default
          class="hero-search-field_input"
          placeholder="Поиск по сайту..."
        />
      </div>
      <div class="hero-search-buttons">
        <router-link to="/MatchesPage">
          <button-white class="hero-search-buttons_style"
            >Список матчей</button-white
          >
        </router-link>
        <router-link to="/TeamPage">
          <button-white class="hero-search-buttons_style"
            >Список команд</button-white
          >
        </router-link>      
      </div>
      <div class="hero-info">
        <div class="hero-info_block">
          <img
            src="../assets/svg/Icon_01.svg"
            class="hero-info_block-image"
            alt="Icon"
          />
          <h2 class="hero-info_block-title">Открытый источик</h2>
          <p>Вся информация и данные для сайта берутся из OpenSource данных.</p>
        </div>
        <div class="hero-info_block">
          <img
            src="../assets/svg/Icon_02.svg"
            class="hero-info_block-image"
            alt="Icon"
          />
          <h2 class="hero-info_block-title">Подробные данные</h2>
          <p>
            Анализ файлов повторов предоставляет очень подробные данные о матче.
          </p>
        </div>
        <div class="hero-info_block">
          <img
            src="../assets/svg/Icon_03.svg"
            class="hero-info_block-image"
            alt="Icon"
          />
          <h2 class="hero-info_block-title">Бесплатно</h2>
          <p>
            Серверы финансируются спонсорами, а код поддерживают волонтеры,
            поэтому услуга предоставляется бесплатно.
          </p>
        </div>
      </div>
        <authorization-button class="hero-authorization" @click="showAuthModal" />
      <button-top />
    </div>
    <FooterDefault />
  </div>
</template>

<script>
import FooterDefault from "@/components/FooterDefault.vue";
import NavigationOpenDota from "@/components/NavigationOpenDota.vue";
export default {
  name: "start-page",
  components: {
    FooterDefault,
    NavigationOpenDota,
  },
  data() {
    return {
      authModal: { isOpened: false },
      registrationModal: { isOpened: false },
    };
  },
  methods: {
    showAuthModal() {
      this.$store.commit("modals/setIsOpenedAuth", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  margin: 0 auto;
  padding-bottom: 7.75em;
  @media (max-width: 390px) {
    padding-bottom: 5.9em;
  }
  &-logo {
    grid-column: 4 / span 6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 9.1em;
    margin-top: 12.5em;

    @media (max-width: 390px) {
      margin: 0 auto;
      padding-top: 6.25em;
      padding-bottom: 2.5em;
    }
  }

  &-search-field {
    grid-column: 4 / span 6;
    justify-content: center;
    margin-bottom: 3.125em;
    @media (max-width: 390px) {
      margin: 0 auto;
      padding-bottom: 1.25em;
    }
    &_input {
      padding: 1.6em 1em;
      @media (max-width: 390px) {
        padding: 0.75em 0.6em;
      }
    }
  }
  &-search-buttons {
    grid-column: 4 / span 6;
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 1.2em;
    margin-bottom: 3.125em;

    @media (max-width: 390px) {
      flex-direction: column;
    }

    &_style {
      padding: 0.9em 5.6em;
      @media (max-width: 390px) {
        padding: 0.9em 3.7em;
      }
    }
  }
  &-info {
    grid-column: 3 / span 8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
    @media (max-width: 390px) {
      flex-direction: column;
      gap: 2.5em 0;
    }

    &_block {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      text-align: center;
      max-width: 370px;
      &-image {
        align-self: center;
        @media (max-width: 390px) {
          width: 27%;
        }
      }
      &-title {
        padding: 1.56em 0;
        @media (max-width: 390px) {
          padding: 0.9em 0;
        }
      }
    }
  }
  &-authorization {
    @media (max-width: 390px) {
      display: none;
    }
  }
}
.navigation-start-page {
  display: none;
  @media (max-width: 390px) {
    display: block;
  }
}
</style>
