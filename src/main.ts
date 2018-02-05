import Vue from "vue";
import VueRouter from 'vue-router';
import AppComponent from "./app.component";



Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: resolve => resolve(require('./components/home.component'))
        }
    ]
});

let v = new Vue({
    el: '#app',
    router,
    render(h) {
        return h(AppComponent);
    }
});

