const state = {
    registered: false,
};

const mutations = {
    registerForPush(state) {
        state.registered = !state.registered;
    },
};

const actions = {
    registerForPush: ({ commit }) => commit('registerForPush')
};

export default {
    state,
    mutations,
    actions,
};