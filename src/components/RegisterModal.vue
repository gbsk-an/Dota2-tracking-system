<template>
  <div @click.stop="hideModal" class="modal">
    <div class="register">
      <button class="register-hide-button" @click.stop="hideModal" />
      <div class="register-field" @click.stop>
        <div class="register-field_title">
          <h1>Регистрация</h1>
        </div>
        <div class="register-field-section">
          <div>
            <label class="register-field-section_label">E-mail</label>
            <input-white class="register-field-section_input" />
          </div>
          <div>
            <label class="register-field-section_label">Пароль</label>
            <input-white class="register-field-section_input" />
          </div>
          <div>
            <label class="register-field-section_label">Логин</label>
            <input-white class="register-field-section_input" />
          </div>
          <div>
            <label class="register-field-section_label">Повторите пароль</label>
            <input-white class="register-field-section_input" />
          </div>
        </div>
        <div class="register-field-info">
          <div class="register-field-info_checkbox">
            <input type="checkbox" class="register-field-info_checkbox-input" />
            <label> Согласен с политикой конфиденциальности </label>
          </div>
          <button-grey class="register-field-info_button"
            >Регистрация</button-grey
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register-modal",
  methods: {
    hideModal() {
      this.$store.commit("modals/setIsOpenedRegister", false);
    },
  },
  computed: {
    isOpenedModal() {
      return this.$store.getters["modals/isOpenedRegister"];
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 6em;
  background-color: var(--dark-violet-alt);
  @media (max-width: 390px) {
    padding: 0;
    z-index: 1000;
  }
}
.register {
  position: relative;
  max-width: 774px;
  padding: 2.5em 5em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: var(--white);
  box-shadow: 0px 32px 128px -48px rgba(16, 0, 37, 0.25);
  border-radius: 10px;
  @media (max-width: 390px) {
    width: 100%;
    height: 100%;
    padding: 4em 1.25em;
    border-radius: 0;
  }
  &-hide-button {
    position: absolute;
    top: 1.25em;
    right: 1.25em;
    width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url("@/assets/svg/Close-black.svg");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:hover {
      background-image: url("@/assets/svg/Close-lime.svg");
    }
  }
  &-field {
    &_title {
      text-align: center;
      & > h1 {
        background: var(--bright-violet-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        @media (max-width: 390px) {
          font-size: 32px;
        }
      }
    }
    &-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1em 1.25em;
      margin: 2em 0;
      &_label {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: var(--black);
      }
      &_input {
        padding: 0.75em 0 0.4em 0;
      }
      &_button {
        align-self: center;
      }
    }
    &-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6em;
      &_checkbox {
        display: flex;
        align-items: center;
        gap: 0 0.6em;
        &-input {
          width: 32px;
          height: 32px;
        }
      }
      &_button {
        padding: 0.9em 2.5em;
      }
    }
  }
}
</style>
