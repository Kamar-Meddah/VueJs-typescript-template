import { Vue, Component, Prop } from "vue-property-decorator";
import withRender from './appComponent.html?style=./appComponent.scss';

@withRender
@Component({
})
export default class AppComponent extends Vue {
mounted(){

}
}