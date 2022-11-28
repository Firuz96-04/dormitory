export default {
    SET_ALL_PRINCIPAL(state, payload) {
         state.principals = payload
    },

    ADD_PRINCIPAL(state, payload) {
        state.principals.push(payload)
    }
}