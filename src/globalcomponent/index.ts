import { App, Component } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
interface Globalcomponent {
  install: (app: App) => void;
}
const componentsArr: Component[] = [];
componentsArr.push(HelloWorld);

const aiComponents: Globalcomponent = {
  install(app) {
    componentsArr.map((item: Component) => {
      app.component(item.name!, item);
    });
  },
};
export default aiComponents;
