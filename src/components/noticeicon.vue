<template>
  <div @click="colse" class="box1" id="all">
    <div style="position:relative;cursor: pointer;">
      <BellOutlined
        style="font-size:24px;"
        @click="open"
        class="box2"
        id="one"
      />
      <div
        style="position:absolute;left:-30px;border:1px solid #eee;padding:2px 5px;background-color:#fff;z-index:999;"
        v-if="flag && eject"
        :class="bottom ? 'bottom' : 'top'"
      >
        {{ msg }}
      </div>
      <div
        style="position:absolute;background:red;color:#fff;top:-5px;left:10px;"
        v-if="content.count > 0 && content.count < 100"
        :class="content.count < 10 ? 'padding1' : 'padding2'"
        @mouseenter="enter"
        @mouseleave="leave"
      >
        {{ content.count }}
      </div>
      <div
        style="position:absolute;background:red;color:#fff;top:-5px;left:10px;"
        v-else
        :class="content.count < 10 ? 'padding1' : 'padding2'"
        @mouseenter="enter"
        @mouseleave="leave"
      >
        99+
      </div>
      <div
        v-if="name"
        style="position:absolute;top:5px;left:50px;border:1px solid #eee;padding:1px 2px;"
      >
        {{ content.count }}
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
  name: boolean;
  flag: boolean;
  msg: string;
  eject: boolean;
  bottom: boolean;
}
export default defineComponent({
  name: "noticeicon",
  props: {
    content: {
      type: Object
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: false, //标记数量大于99
      flag: false, //点击弹出标记
      msg: "默认上方弹出", //弹出内容
      eject: false, //标记是否弹出
      bottom: false //弹出方向
    });
    //移入
    const enter = (): void => {
      data.name = true;
    };
    //移出
    const leave = (): void => {
      data.name = false;
    };
    //点击弹出
    const open = (): void => {
      console.log("one");
      const box1 = document.getElementById("all");
      box1!.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();
      });
      data.flag = true;
    };
    //点击关闭
    const colse = (): void => {
      //   console.log("all");
      //   const box2 = document.getElementById("all");
      //   box2!.addEventListener("click", (e: MouseEvent) => {
      //     e.preventDefault();
      //     data.flag = false;
      //   });
    };
    onMounted(() => {
      if (props.content!.msg) {
        data.msg = props.content!.msg;
      }
      if (props.content!.eject) {
        data.eject = props.content!.eject;
      }
      if (props.content!.bottom) {
        data.bottom = props.content!.bottom;
      }
    });
    return {
      ...toRefs(data),
      enter,
      leave,
      open,
      colse
    };
  }
});
</script>

<style scoped lang='scss'>
.padding1 {
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 50%;
}
.padding2 {
  width: 30px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: 20px;
}
.top {
  top: -30px;
}
.bottom {
  bottom: -25px;
}
</style>