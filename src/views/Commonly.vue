<template>
  <div>
    <div style="margin:30px 0 0 20px;" class="hooks">
      <div style="font-size:24px;">当前时间</div>
      <div>{{ date }}</div>
      <div style="font-size:24px;">鼠标移动的坐标</div>
      <div>{{ x }}---{{ y }}</div>
      <div style="font-size:24px;">计数器</div>
      <div></div>
      <div style="font-size:24px;">本地存储</div>
      <div class="flex bottom">
        <!-- <div>{{ getsss }}</div> -->
        <div>
          <a-button @click="setData">储存LocalStorage</a-button>
        </div>
        <div>
          <a-button @click="getData">获取LocalStorage</a-button>
        </div>
        <div>
          <a-button @click="clearData">清除LocalStorage</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { useMouse } from "../hooks/useMouse";
import { useDate } from "../hooks/useDate";
import { useStorage } from "../hooks/useStorage";
interface Data {
  name: string;
  names: object;
  getsss: any;
}

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "hello world~",
      getsss: null,
      names: {
        name: "1452"
      }
    });
    const { x, y } = useMouse();
    const { date } = useDate();
    const { getMessage, setMessage, clearMessage } = useStorage();
    const setData = (): void => {
      setMessage("keys", data.names);
    };
    const getData = (): void => {
      data.getsss = getMessage("keys");
      console.log(getMessage("keys"));
    };
    const clearData = (): void => {
      clearMessage("keys");
    };
    return {
      ...toRefs(data),
      x,
      y,
      date,
      //   getLocal,
      //   setLocal,
      //   clearLocal,
      getMessage,
      setMessage,
      clearMessage,
      setData,
      getData,
      clearData
    };
  }
});
</script>

<style scoped lang='scss'>
.hooks > div {
  margin-bottom: 15px;
}
.bottom > div {
  margin-right: 15px;
}
</style>