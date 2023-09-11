import Vue from 'vue';
import Vuex from 'vuex';

import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask:[],
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },

        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },

        SET_ASK(state, ask) {
            state.ask = ask;
        },
    },
    actions: {
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

        FETCH_JOBS(context) {
            fetchJobsList()
            // .then(response => {
            //     console.log(response);
            //     context.commit('SET_JOBS', response.data);
            // })

            // 구조 분해 문법(Destructuring)
            // const { config, data, headers, request, status, statusText } = response
            .then(({ data }) => {
                console.log(data);
                context.commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            });
        },

        FETCH_ASK(context) {
            fetchAskList()
            .then(({ data }) => {
                console.log(data);
                context.commit('SET_ASK', data);
            })
            .catch(error => {
                console.log(error);
            });
        },
    }
});