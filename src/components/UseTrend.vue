<template>
  <div style="margin:30px 0 0 20px;">
    <div style="display:flex;">
      <div style="display:flex;">
        <div>{{ Trendcontentone }}</div>
        <div>
          <div :class="colorflag ? 'red1' : 'red2'" class="margin1"></div>
        </div>
        <div>{{ percentage1 }}</div>
      </div>
      <div style="margin-left:50px;display:flex;">
        <div>{{ Trendcontenttwo }}</div>
        <div>
          <div :class="colorflag ? 'green1' : 'green2'" class="margin2"></div>
        </div>
        <div>{{ percentage2 }}</div>
      </div>
      <div>
        <slot name="action"></slot>
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
.red1 {
  border-bottom: 20px solid red;
}
.green1 {
  border-top: 20px solid green;
}
.red2 {
  border-top: 20px solid green;
}
.green2 {
  border-bottom: 20px solid red;
}
.margin1 {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
.margin2 {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
</style>