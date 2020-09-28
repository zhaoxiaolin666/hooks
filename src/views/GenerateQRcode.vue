<template>
  <div>
    <div>
      <input type="text" v-model="value" style="outline:none;" />
      <button @click="QR">生成二维码</button>
    </div>
    <div v-if="imrUrl" style="margin-top:20px;">
      <img :src="imrUrl" style="height:200px;width:200px;" />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import QRCode from "qrcode";
interface Data {
  name: string;
  imrUrl: string;
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({ name: "", imrUrl: "", value: "" });
    const QR = (): void => {
      QRCode.toDataURL(data.value)
        .then((url: any) => {
          data.imrUrl = url;
          console.log(url);
        })
        .catch((err: any) => {
          console.error(err);
        });
    };
    return {
      ...toRefs(data),
      QR
    };
  }
});
</script>

<style scoped lang='scss'>
</style>