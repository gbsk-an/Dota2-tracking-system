const modalStoreModule = {
  namespaced: true,
  state: () => ({
    auth: { isOpened: false },
    register: { isOpened: false },
  }),
  getters: {
    isOpenedAuth(state) {
      return state.auth.isOpened;
    },
    isOpenedRegister(state) {
      return state.register.isOpened;
    },
  },
  mutations: {
    setIsOpenedAuth(state, newVal) {
      state.auth.isOpened = newVal;
    },
    setIsOpenedRegister(state, newVal) {
      state.register.isOpened = newVal;
    },
  },
};

export default modalStoreModule;
