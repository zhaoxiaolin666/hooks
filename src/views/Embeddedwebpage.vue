<template>
  <div>
    <div style="font-size:24px;">内嵌网页</div>
    <div class="flex" style="padding:30px 0;">
      <div>
        <button @click="open">打开内嵌网页</button>
      </div>
      <div style="margin-left:15px;">
        <button @click="colse">关闭内嵌网页</button>
      </div>
    </div>
    <div :class="flagwebsite ? 'solid' : ''">
      <webpage
        :website="website"
        :flagwebsite="flagwebsite"
        :stylecss="stylecss"
      ></webpage>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import webpage from "@/components/webpage.vue";
interface stylecssItem {
  [key: string]: string;
}
interface Data {
  name: string;
  website: string;
  flagwebsite: boolean;
  stylecss: stylecssItem;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
      website: "https://www.baidu.com/",
      flagwebsite: false,
      stylecss: {
        width: "1250",
        height: "600",
        frameborder: "0",
        scrolling: "0"
      }
    });
    //打开网页
    const open = (): void => {
      data.flagwebsite = true;
    };
    //关闭网页
    const colse = (): void => {
      data.flagwebsite = false;
    };
    return {
      ...toRefs(data),
      open,
      colse
    };
  }
});
</script>

<style scoped lang='scss'>
.solid {
  border: 3px solid #eee;
}
</style>