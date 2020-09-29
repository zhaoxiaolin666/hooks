<template>
  <div></div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
  onUnmounted
} from "vue";
import { getmark } from "../hooks/usewarter";

interface Data {
  name: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({ name: "I LOVE YOU" });
    const { watermark } = getmark();
    onMounted(() => {
      watermark(data.name);
    });
    onUnmounted(() => {
      data.name = "";
      watermark(data.name);
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>