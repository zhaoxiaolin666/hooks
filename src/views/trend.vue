<template>
  <div>
    <div style="font-size:24px;">趋势组件</div>
    <!-- 正常时间 -->
    <div class="flex a-center j-between">
      <div style="background:#eee;width:45%;height:1px;"></div>
      <div style="font-size:18px;">正常时间</div>
      <div style="background:#eee;width:45%;height:1px;"></div>
    </div>
    <div>
      <use-trend
        :Trendcontentone="Trendcontentone"
        :Trendcontenttwo="Trendcontenttwo"
        :percentage1="percentage1"
        :percentage2="percentage2"
        :colorflag="colorflag1"
      ></use-trend>
    </div>
    <!-- 颜色翻转 -->
    <div class="flex a-center j-between">
      <div style="background:#eee;width:45%;height:1px;"></div>
      <div style="font-size:18px;">颜色翻转</div>
      <div style="background:#eee;width:45%;height:1px;"></div>
    </div>
    <div>
      <use-trend
        :Trendcontentone="Trendcontentone"
        :Trendcontenttwo="Trendcontenttwo"
        :percentage1="percentage1"
        :percentage2="percentage2"
        :colorflag="colorflag2"
      ></use-trend>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  Trendcontentone: string;
  Trendcontenttwo: string;
  percentage1: string;
  percentage2: string;
  colorflag1: boolean;
  colorflag2: boolean;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      Trendcontentone: "营业额",
      Trendcontenttwo: "利润",
      percentage1: "15%",
      percentage2: "25%",
      colorflag1: true,
      colorflag2: false
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>