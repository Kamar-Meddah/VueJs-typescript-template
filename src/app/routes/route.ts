import Vue from "vue";
import VueRouter from 'vue-router';
import HomeComponent from "../components/home/home.component";

// const home = import ("../components/home/home.component"); // lazy loading
Vue.use(VueRouter);

const router = <VueRouter>new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomeComponent,
            meta: {title: 'Home'}
        }
    ]
});

router.beforeResolve((to, from, next) => {document.title = to.meta.title;next()});

export default router;