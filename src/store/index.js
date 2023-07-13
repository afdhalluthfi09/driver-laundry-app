import * as Vuex from 'vuex';
// import default
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

// import module
import laundry from './laundry/index';
import auth from './auth/index';
export default new Vuex.Store({
    namespaced:true,
    state,
    getters,
    actions,
    mutations,
    modules:{
        laundry:laundry,
        auth:auth
    }
})