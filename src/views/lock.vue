<template>
  <div class="box">
    <div style="width:400px;height:150px;background:#fff;border-radius:10px;">
      <div style="padding:20px;">
        <div style="margin-top:20px;">
          <input
            type="text"
            v-model="value"
            placeholder="请输入锁屏密码"
            style="outline:none;width:360px;height:30px;border:1px solid #ccc;"
          />
        </div>
        <div style="margin-top:30px;text-align:right;">
          <button @click="ok">解锁</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { message } from "ant-design-vue";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { useStorage } from "../hooks/useStorage";
import { useRouter } from "vue-router";
interface Data {
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({ value: "" });
    const router = useRouter();
    //引入useStorage()
    const { getMessage, setMessage, clearMessage } = useStorage();
    //确定密码
    const ok = (): void => {
      console.log(getMessage("pwd"));
      if (getMessage("pwd") === data.value) {
        clearMessage("pwd");
        router.push("/Lockscreen");
      } else {
        message.error("密码不正确");
      }
    };
    return {
      ...toRefs(data),
      ok
    };
  }
});
</script>

<style scoped lang='scss'>
.box {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/lock.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>