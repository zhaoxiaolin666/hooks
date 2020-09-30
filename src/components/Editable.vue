<template>
  <div>
    <div
      style="height:30px;line-height:30px;"
      @click="clickName"
      v-if="!flagName"
    >
      {{ msg }}
    </div>
    <div style="display:flex;align-items:center;" v-else>
      <div>
        <input
          type="text"
          v-model="value"
          @blur="blur"
          @keyup.enter="onenter"
          autofocus="autofocus"
          @input="modify"
          id="input"
        />
      </div>
      <div>
        <button>确定</button>
      </div>
      <div>
        <button>取消</button>
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
interface Data {
  name: string;
  flagName: boolean;
  msg: string;
  value: string;
}
export default defineComponent({
  name: "Editable",
  props: {
    msg: {
      type: String,
      default: "Tom"
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
      flagName: false,
      msg: "",
      value: ""
    });
    //点击文字
    const clickName = (): void => {
      data.flagName = true;
      const input = document.getElementById("input")! as any;
      input.focus();
    };
    //输入框失去焦点
    const blur = (): void => {
      data.flagName = false;
    };
    //enter事件
    const onenter = (): void => {
      data.flagName = false;
    };
    //修改
    const modify = (): void => {
      data.msg = data.value;
    };
    onMounted(() => {
      data.msg = props.msg;
      data.value = data.msg;
    });
    return {
      ...toRefs(data),
      clickName,
      blur,
      onenter,
      modify
    };
  }
});
</script>

<style scoped lang='scss'>
</style>