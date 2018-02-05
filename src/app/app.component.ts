import { Vue, Component, Prop } from "vue-property-decorator";
import withRender from './app.component.html?style=./app.component.scss';

@withRender
@Component({
})
export default class AppComponent extends Vue {
mounted(){
console.log('hello')
}
}