<template>
  <div class="flex j-between" style="width:100vw;height:100vh;">
    <div style="width:15%;height:100%;">
      <hello-world></hello-world>
    </div>
    <div style="width:85%;height:100%;background:#f9f9f9;">
      <div style="background:#fff;width:100%;height:100%;overflow:auto;">
        <router-view></router-view>
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
</style>