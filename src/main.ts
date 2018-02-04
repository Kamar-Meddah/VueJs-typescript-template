import Vue from "vue";
import AppComponent from "./app.component";

let v = new Vue({
    el: "#app",
    components: {AppComponent},
    render(h){
        return h('AppComponent');
    }
});

