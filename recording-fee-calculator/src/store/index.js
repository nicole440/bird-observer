// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// const currentDocument = JSON.parse(localStorage.getItem('document'));

// export default new Vuex.Store({
//     state: {
//         documents: [],
//         document: currentDocument || {
//             documentType: "",
//             pageCount: "",
//             hasFee: "",
//             hasTransferTax: "",
//             consideration: "",
//             transferTaxAmount: "",
//         }
//     },
//     mutations: {
//         ADD_NEW_DOCUMENT(state, document) {
//             state.documents.push(document);
//             localStorage.setItem('document', JSON.stringify(document))
//         }
//     }
// })