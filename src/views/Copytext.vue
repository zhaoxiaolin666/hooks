<template>
  <div>
    <!-- <div class="flex" >
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
    </div> -->
    <input id="demoInput" value="hello world" />
    <button id="btn" @click="copytext">点我复制</button>
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
      let btn = document.querySelector("#btn")!;
      btn.addEventListener("click", () => {
        // document.getElementById("demoInput")!.select();
        if (document.execCommand("copy")) {
          document.execCommand("copy");
          console.log("复制成功");
        }
      });
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