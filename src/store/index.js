import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state:{
        show:false,
        num: 1
    },
    mutations: {
        isShow: function(state){
            state.show = !state.show
        },
        add: function(state){
            state.num++;
        },
        jian: function(state){
            state.num--;
        }
    }
})
