<template>
  <div style="margin:30px 0 0 20px;">
    <div style="display:flex;">
      <div style="display:flex;">
        <div>{{ Trendcontentone }}</div>
        <div>
          <CaretUpOutlined :class="colorflag ? 'red' : 'green'" />
        </div>
        <div>{{ percentage1 }}</div>
      </div>
      <div style="margin-left:50px;display:flex;">
        <div>{{ Trendcontenttwo }}</div>
        <div>
          <CaretDownOutlined :class="colorflag ? 'green' : 'red'" />
        </div>
        <div>{{ percentage2 }}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  names: string;
}
export default defineComponent({
  name: "UseTrend",
  props: {
    Trendcontentone: {
      type: String,
      required: true
    },
    Trendcontenttwo: {
      type: String,
      required: true
    },
    percentage1: {
      type: String,
      required: true
    },
    percentage2: {
      type: String,
      required: true
    },
    colorflag: {
      type: Boolean,
      required: true
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({ names: "" });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
.red {
  color: red;
}
.green {
  color: green;
}
</style>