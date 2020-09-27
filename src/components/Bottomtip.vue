<template>
  <div
    style="width:100%;height:80px; bottom:0;left:0;position:fixed;border:1px solid #eee;"
  >
    <div
      style="height:100px;display: flex;justify-content: space-between;align-items: center;"
    >
      <div>{{ content }}</div>
      <div>
        <button
          style="background-color:#fff;border:1px solid #eee;outline:none;"
        >
          取消
        </button>
        <button
          style="margin-left:20px;background-color:#1B86D1;color:#fff;border:1px solid #eee;outline:none;"
        >
          确定
        </button>
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
  name: "Bottomtip",
  props: {
    content: {
      type: String,
      required: true
    }
  },
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