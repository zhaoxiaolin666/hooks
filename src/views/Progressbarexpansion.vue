<template>
  <div>
    <div>普通进度条</div>
    <progressbar
      :width="width"
      :height="height"
      :color="color"
      :percentage="percentage"
      :animation="animation"
      :time="time"
      :definition="definition"
      :showText="showText"
    ></progressbar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: string;
  width: number;
  height?: number;
  color?: string;
  fatherWidth?: number;
  animation?: boolean;
  showText?: boolean;
  definition?: boolean;
  time?: number;
  percentage: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
      width: 500, //宽度
      height: 20, //高度
      color: "red", //颜色
      animation: true, //是否显示动画
      time: 1, //动画时间
      percentage: 0.5, //百分比
      showText: true, //是否显示文字
      definition: true //是否显示自定内容
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>s