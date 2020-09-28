<template>
  <div>
    <div style="font-size:24px;margin:15px 0;">通知图标</div>
    <div style="font-size:18px;margin:15px 0;">普通通知</div>
    <noticeicon :content="content1"></noticeicon>
    <div style="font-size:18px;margin:15px 0;">消息超过99</div>
    <noticeicon :content="content2"></noticeicon>
    <div style="font-size:18px;margin:15px 0;">默认弹出菜单</div>
    <noticeicon :content="content3"></noticeicon>
    <div style="font-size:18px;margin:15px 0;">控制菜单方向</div>
    <noticeicon :content="content4"></noticeicon>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface contentItem {
  count: number;
  msg?: string;
  eject?: boolean;
  bottom?: boolean;
}
interface Data {
  name: string;
  content1: contentItem;
  content2: contentItem;
  content3: contentItem;
  content4: contentItem;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
      content1: { count: 5 },
      content2: { count: 155 },
      content3: { count: 5, msg: "你好,世界!", eject: true },
      content4: { count: 155, eject: true, bottom: true }
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>