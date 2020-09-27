<template>
  <div>
    <div style="position:relative;cursor: pointer;">
      <BellOutlined style="font-size:24px;" @click="open" />
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
    const data: Data = reactive<Data>({ name: false });
    //移入
    const enter = (): void => {
      data.name = true;
    };
    //移出
    const leave = (): void => {
      data.name = false;
    };
    //点击弹出
    const open = (): void => {};
    onMounted(() => {
      console.log(props.content);
    });
    return {
      ...toRefs(data),
      enter,
      leave,
      open
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
</style>