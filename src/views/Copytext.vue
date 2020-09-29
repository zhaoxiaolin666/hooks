<template>
  <div>
    <p id="text">复制文字</p>
    <input id="input" value="这是幕后黑手" />
    <button @click="copyText">copy</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext, ref, Ref } from "vue";
interface Data {
  name: string;
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({ name: "", value: "" });
    const copyText = (): void => {
      var text = document.getElementById("text")!.innerText! as any; //复制文本
      var input = document.getElementById("input")! as any; //承载复制内容
      input.value = text; // 修改文本框的内容
      input.select(); // 选中文本
      document.execCommand("copy"); // 执行浏览器复制命令
    };
    return {
      ...toRefs(data),
      copyText
    };
  }
});
</script>

<style scoped lang='scss'>
</style>