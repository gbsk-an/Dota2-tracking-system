<template>
    <div v-if="showRegisterModal" @click.stop="hideRegisterModal" class="modal">
        <div class="register">
            <button 
                class="register-hide-button"
                @click.stop="hideRegisterModal"
            />
            <div class="register-field" @click.stop>
                <div class="register-field_title">
                    <h1>Регистрация</h1>
                </div>
                <div class="register-field-section">
                    <div>
                        <label class="register-field-section_label">Логин / E-mail</label>
                        <input-white  class="register-field-section_input" />
                    </div>
                    <div>
                        <label class="register-field-section_label">Пароль</label>
                        <input-white  class="register-field-section_input" />
                    </div>
                    <button-violet class="register-field-section_button">Войти</button-violet>
                </div>
                <div class="register-field-info">
                    <div class="register-field-info_item">
                        <p>Нет учетной записи?</p>
                        <p>Регистрация</p>
                    </div>
                    <div class="register-field-info_item">
                        <p>Забыли пароль?</p>
                        <p>Восстановить пароль</p>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'register-modal',
    props: {
        showRegisterModal: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideRegisterModal() {
            this.$emit('update:showRegisterModal', false)
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    height: 100vh;
    width: 100%;
    position: fixed;
    padding-top: 6em;
    background-color: var(--dark-violet-alt);
}
.register {
    position: relative;
    max-width: 536px;
    padding: 2.75em 5em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: var(--white);
    box-shadow: 0px 32px 128px -48px rgba(16, 0, 37, 0.25);
    border-radius: 10px;
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
    }
    &-field {

        &_title > h1 {
            background: var(--bright-violet-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        &-section {
            display: flex;
            flex-direction: column;
            gap: 2.25em;
            margin: 2.25em 0 1.5em;
            &_label {
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                color: var(--black);
            }
            &_input {
                padding: .75em 0 .4em 0;
            }
            &_button {
                align-self: center;
            }
        }
        &-info {
            display: flex;
            flex-direction: column;
            gap: 1.2em;

            &_item {
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;

                :first-child {
                    font-weight: 500;
                    color: var(--grey);
                }
                :last-child {
                    position: relative;
                    font-weight: 700;
                    padding-right: 2.4em;
                    color: var(--black);
                    &::after {
                        content: "";
                        position: absolute;
                        width: 24px;
                        height: 24px;
                        background-image: url("@/assets/svg/Arrow-right-black.svg");
                        background-repeat: no-repeat;
                        background-position: center;
                        top: 50%;
                        right: 0;
                        transform: translate(-50%, -50%);
                        cursor: pointer;
                    }
                    &:hover {
                        color: var(--lime);
                    }
                }
            }
        }
    }
}


</style>