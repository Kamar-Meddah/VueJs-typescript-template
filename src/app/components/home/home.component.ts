import {Vue, Component, Prop, Provide} from "vue-property-decorator";
import withRender from './home.component.html?style=./home.component.scss';

@withRender
@Component({
})
export default class HomeComponent extends Vue {

    mounted(){
        console.log(this.$router)
    }
}