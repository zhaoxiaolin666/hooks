<template>
  <div>
    <div v-if="flagwebsite">
      <iframe
        :src="website"
        :height="stylecss.height"
        :width="stylecss.width"
        :frameborder="stylecss.frameborder"
        :scrolling="stylecss.scrolling"
      ></iframe>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  name: string;
}
export default defineComponent({
  name: "webpage",
  props: {
    website: {
      type: String,
      default: "https://ai.taobao.com/"
    },
    open: {
      type: Boolean,
      required: true
    },
    stylecss: {
      type: Object,
      required: true
    },
    flagwebsite: {
      type: Boolean,
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