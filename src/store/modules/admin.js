const state = {
  isAdmin: false,
};

const getters = {
  isAdmin: state => state.isAdmin,
};

const mutations = {
  setAdmin(state, isAdmin) {
    state.isAdmin = isAdmin;
  },
};

const actions = {
  updateAdminStatus({ commit }, isAdmin) {
    commit('setAdmin', isAdmin);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
