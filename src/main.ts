import Vue from "vue";
import router from "./app/routes/route"
import AppComponent from "./app/app.component";


let v = new Vue({
    el: '#app',
    router,
    render(h) {
        return h(AppComponent);
    }
});

