<template>
  <div>
    <div
      v-if="definition"
      :style="{ width: width + 'px' }"
      style="display:flex;justify-content:space-between;"
    >
      <div style="font-size:20px">{{ percentage * 100 }}%</div>
      <div>转化率(日同比{{ percentage * 100 }}%)</div>
    </div>
    <div
      class="box"
      :style="{
        width: width + 'px',
        height: height + 'px',
        'border-radius': height / 2 + 'px'
      }"
    >
      <div
        class="cont"
        :style="{
          width: width * percentage + 'px',
          height: height + 'px',
          'animation-duration': time + 's',
          'border-radius': height / 2 + 'px',
          'line-height': height + 'px',
          background: color
        }"
        :class="animation ? 'cont' : ''"
      >
        <div v-if="showText">{{ percentage * 100 }}%&nbsp;&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted
} from "vue";
interface Data {}
export default defineComponent({
  name: "progressbar",
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      default: 10
    },
    color: {
      type: String,
      default: "skyblue"
    },
    animation: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 5
    },
    percentage: {
      type: Number,
      required: true
    },
    definition: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({});
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
.box {
  background: #f0f0f0;
}
.cont {
  text-align: right;
  color: #fff;
  animation: mymove;
}
@keyframes mymove {
  0% {
    width: 0;
  }
}
</style>