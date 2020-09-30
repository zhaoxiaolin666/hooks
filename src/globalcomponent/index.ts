import { App, Component } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import UseTrend from "@/components/UseTrend.vue";
import VerificationCode from "@/components/VerificationCode.vue";
import Bottomtip from "@/components/Bottomtip.vue";
import webpage from "@/components/webpage.vue";
import noticeicon from "@/components/noticeicon.vue";
import wartemark from "@/components/wartemark.vue";
import preview from "@/components/preview.vue";
import Editable from "@/components/Editable.vue";
import progressbar from "@/components/progressbar.vue";

interface Globalcomponent {
  install: (app: App) => void;
}
const componentsArr: Component[] = [];
componentsArr.push(HelloWorld);
componentsArr.push(UseTrend);
componentsArr.push(VerificationCode);
componentsArr.push(Bottomtip);
componentsArr.push(webpage);
componentsArr.push(noticeicon);
componentsArr.push(wartemark);
componentsArr.push(preview);
componentsArr.push(Editable);
componentsArr.push(progressbar);

const aiComponents: Globalcomponent = {
  install(app) {
    componentsArr.map((item: Component) => {
      app.component(item.name!, item);
    });
  },
};
export default aiComponents;
