<template>
  <div>
    <div class="hooks">
      <div style="font-size:24px;">首页</div>
      <div style="font-size:24px;">常用hooks</div>
      <div style="font-size:18px;">
        <div>倒计时</div>
        <div>鼠标移动的位置</div>
        <div>计数器</div>
        <div>本地存储</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";

interface Data {
  name: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({ name: "" });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
.hooks > div {
  margin-bottom: 15px;
}
</style>