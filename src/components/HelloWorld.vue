<template>
  <div style="cursor: pointer;">
    <div v-for="(item, index) in hooks" :key="index">
      <div
        class="navs"
        style="padding:10px 0;display: flex;"
        @click="$router.push(item.path)"
        :class="item.path === $route.path ? 'color' : ''"
      >
        <div style="padding:0 10px 0 20px;">
          <component :is="item.icon"></component>
        </div>
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Hooks {
  [key: string]: string;
}
interface Data {
  name: string;
  hooks: Hooks[];
}
export default defineComponent({
  name: "HelloWorld",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      name: "",
      hooks: [
        { name: "首页", path: "/home", icon: "HomeOutlined" },
        {
          name: "常用hooks",
          path: "/Commonly",
          icon: "DeploymentUnitOutlined"
        },
        { name: "图片预览", path: "/Picturepreview", icon: "ZoomInOutlined" },
        { name: "趋势", path: "/trend", icon: "BarChartOutlined" },
        { name: "底部工具栏", path: "/bottomtoolbars", icon: "ToolOutlined" },
        { name: "通知图标", path: "/Notificationicon", icon: "BellOutlined" },
        { name: "内嵌网页", path: "/Embeddedwebpage", icon: "FundOutlined" },
        { name: "验证码按钮", path: "/Captchabutton", icon: "MessageOutlined" },
        {
          name: "进度条拓展",
          path: "/Progressbarexpansion",
          icon: "LinkOutlined"
        },
        {
          name: "生成二维码",
          path: "/GenerateQRcode",
          icon: "QrcodeOutlined"
        },
        {
          name: "复制文本",
          path: "/Copytext",
          icon: "CopyrightCircleOutlined"
        },
        {
          name: "生成水印",
          path: "/Generatewatermark",
          icon: "BorderTopOutlined"
        },
        { name: "可编辑文字", path: "/Editabletext", icon: "EditOutlined" }
      ]
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
.color {
  background-color: #e6f7ff;
  color: #1890ff;
  border-right: 3px solid #1890ff;
}
.navs:hover {
  color: #1890ff;
}
</style>