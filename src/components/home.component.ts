import { Vue, Component, Prop } from "vue-property-decorator";
import withRender from './home.component.html?style=./home.component.scss';
@withRender
@Component({
})
export default class HomeComponent extends Vue {
    mounted(){

    }
}