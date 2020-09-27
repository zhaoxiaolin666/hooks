<template>
  <div>
    <div class="hooks">
      <div style="font-size:24px;">常用hooks</div>
      <!-- 当前时间 -->
      <div style="font-size:24px;">当前时间</div>
      <div>{{ date }}</div>
      <!-- 鼠标移动的坐标 -->
      <div style="font-size:24px;">鼠标移动的坐标</div>
      <div>{{ x }}---{{ y }}</div>
      <!-- 计数器 -->
      <div style="font-size:24px;">计数器</div>
      <div class="flex en">
        <div>
          <a-button @click="inc">增加</a-button>
        </div>
        <div>
          <a-button @click="reduce">减少</a-button>
        </div>
        <div>
          <a-button @click="setUp">设置</a-button>
        </div>
        <div>
          <a-button @click="resetUp">重置</a-button>
        </div>
        <div>
          <a-button @click="Delayplus">延迟加</a-button>
        </div>
        <div>
          <a-button @click="Delayminus">延迟减</a-button>
        </div>
        <div>
          <a-button @click="Addbyquantity">按数量加</a-button>
        </div>
        <div>
          <a-button @click="Decreasebyquantity">按数量减</a-button>
        </div>
        <div>{{ count }}</div>
      </div>
      <!-- 本地存储 -->
      <div style="font-size:24px;">本地存储</div>
      <div class="flex bottom">
        <div>
          <a-button @click="setData">储存LocalStorage</a-button>
        </div>
        <div>
          <a-button @click="getData">获取LocalStorage</a-button>
        </div>
        <div>
          <a-button @click="clearData">清除LocalStorage</a-button>
        </div>
        <div>{{ getsss }}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { useMouse } from "../hooks/useMouse";
import { useDate } from "../hooks/useDate";
import { useStorage } from "../hooks/useStorage";
import { useCounter } from "../hooks/useCounter";
interface Data {
  name: string;
  name111: string;
  names: object;
  getsss: any;
  current: number;
  currentmin: number;
  currentmax: number;
  delay: number;
  ok: number;
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
      },
      name111: "",
      current: 1,
      currentmin: 1,
      currentmax: 10,
      delay: 2000,
      ok: 2
    });
    const { x, y } = useMouse();
    const { date } = useDate();
    const { getMessage, setMessage, clearMessage } = useStorage();
    const {
      count,
      inc,
      dec,
      set,
      reset,
      delayInc,
      delayDec,
      setInc,
      setDec
    } = useCounter({
      current: data.current,
      min: data.currentmin,
      max: data.currentmax
    });
    //加
    const increase = () => {
      inc();
    };
    //减
    const reduce = () => {
      dec();
    };
    //设置
    const setUp = () => {
      set(data.currentmax);
    };
    //重置
    const resetUp = () => {
      reset();
    };
    //延迟加
    const Delayplus = () => {
      delayInc();
    };
    //延迟减
    const Delayminus = () => {
      delayDec(data.delay);
    };
    //按数量加
    const Addbyquantity = () => {
      setInc();
    };
    //按数量减
    const Decreasebyquantity = () => {
      setDec(data.ok);
    };
    const setData = (): void => {
      setMessage("keys", data.name);
    };
    //取
    const getData = (): void => {
      data.getsss = getMessage("keys");
      console.log(getMessage("keys"));
    };
    //清除
    const clearData = (): void => {
      clearMessage("keys");
    };

    return {
      ...toRefs(data),
      x,
      y,
      date,
      getMessage,
      setMessage,
      clearMessage,
      setData,
      getData,
      clearData,
      increase,
      reduce,
      setUp,
      resetUp,
      Delayplus,
      Delayminus,
      Addbyquantity,
      Decreasebyquantity,
      count,
      inc
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
.en > div {
  margin-right: 15px;
}
</style>