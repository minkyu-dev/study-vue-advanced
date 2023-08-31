import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    // mode 설정을 하지 않으면 기본적으로 hash 모드로 동작하여 URL 뒤에 #이 붙는다
    mode: 'history',
    routes: [
        {
            path: '/news',
            component: NewsView
        },
        {
            path: '/ask',
            component: AskView
        },
        {
            path: '/jobs',
            component: JobsView
        }
    ]
});