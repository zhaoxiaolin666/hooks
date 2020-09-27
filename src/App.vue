<template>
  <div>
    <router-view />
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
* {
  margin: 0;
  padding: 0;
}
html,
body {
  overflow-x: hidden;
  height: 100vw;
  width: 100vh;
}
@import "../src/style/base.css";
</style>
