<template>
  <div class="flex j-between">
    <div style="width:12vw;height:100vh;">
      <hello-world></hello-world>
    </div>
    <div style="width:88vw;height:100vh;background:#f9f9f9;">
      <div style="margin:20px 0 0 15px;background:#fff;width:100%;height:100%;">
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