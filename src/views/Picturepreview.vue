<template>
  <div>
    <div style="font-size:24px;">图片预览</div>
    <div>单击图片预览，点击遮罩层可关闭</div>
    <preview :name="name"></preview>
    <div>单击图片预览，点击遮罩层不可关闭</div>
    <preview :name="nametwo" :shut="shut"></preview>
    <div>多图片预览,点击遮罩层可关闭</div>
    <preview :name="nameThree"></preview>
    <div>多图片预览,点击遮罩层不可关闭</div>
    <preview :name="nameThree" :shut="shut"></preview>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Name {
  [key: string]: string;
}
interface Data {
  name?: Name[];
  nametwo?: Name[];
  nameThree?: Name[]; //图片
  shut: boolean; //是否关闭遮罩层
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: [{ pre: require("@/assets/logo.png") }],
      nametwo: [{ pre: require("@/assets/1.a7ce9b96.jpg") }],
      nameThree: [
        { pre: require("@/assets/1.a7ce9b96.jpg") },
        { pre: require("@/assets/2.973447f0.jpeg") },
        { pre: require("@/assets/3.65303675.jpg") }
      ],
      shut: false
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
</style>