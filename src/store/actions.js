import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from '../api/index';

export default {
    // mutations에 접근할 수 있게 context 인자를 제공함
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },

    // 구조 분해 문법(Destructuring)
    // const { commit, dispatch, getters, rootGetters, rootsState, state } = context;
    FETCH_JOBS({ commit }) {
        // fetchJobsList()
        // .then(response => {
        //     console.log(response);
        //     context.commit('SET_JOBS', response.data);
        // })
            
        // 구조 분해 문법(Destructuring)
        // const { config, data, headers, request, status, statusText } = response;
        fetchJobsList()
        .then(({ data }) => {
            console.log(data);
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error);
        });
    },

    FETCH_ASK({ commit }) {
        fetchAskList()
        .then(({ data }) => {
            console.log(data);
            commit('SET_ASK', data);
        })
        .catch(error => {
            console.log(error);
        });
    },

    FETCH_USER({ commit }, userName) {
        fetchUserInfo(userName)
        .then(({ data }) => {
            console.log(data);
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}