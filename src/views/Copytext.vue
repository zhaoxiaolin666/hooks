<template>
  <div>
    <div class="flex" >
      <div id="text">
        <input
          v-model="value"
          placeholder="输入文字点击复制"
          style="width:500px;height:30px;border:1px solid skyblue;outline:none;"
        />
      </div>
      <div style="margin-left:15px;">
        <button @click="copytext">复制</button>
      </div>
    </div>
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
    const copytext = (): void => {
      const text = document.getElementById("text")!.innerText;
      console.log(text);
      //   var input = document.getElementById("input");
      //   input.value = text; // 修改文本框的内容
      //   input.select(); // 选中文本
      //   document.execCommand("copy"); // 执行浏览器复制命令
      //   alert("复制成功");
    };
    return {
      ...toRefs(data),
      copytext
    };
  }
});
</script>

<style scoped lang='scss'>
</style>