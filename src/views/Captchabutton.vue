<template>
  <div>
    <div style="font-size:24px;">验证码按钮</div>
    <div style="padding:30px 0;">
      <verification-code
        :name="name"
        :times="times"
        :Processing="Processing"
        :finish="finish"
      ></verification-code>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext, ref, Ref } from "vue";
interface Data {
  name: string;
  Processing: string;
  finish: string;
  times: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "发送验证码",
      times: 60,
      Processing: "s后重新发送",
      finish: "重新发送"
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>