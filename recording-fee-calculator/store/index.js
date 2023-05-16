import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        documents: []
    },
    mutations: {
        ADD_NEW_DOCUMENT(state, document) {
            state.documents.push(document);
        }
    }
})