<template>
  <div>
    <div @click="lock" style="font-size:30px;" class="lock">
      <LockOutlined />
    </div>
    <!-- 大遮罩层 -->
    <div class="preview" v-if="flag" @click="colse"></div>
    <div style="width:400px;height:200px;" class="box" v-if="flag">
      <div style="padding:20px;">
        <div>
          <h2>设置锁屏密码</h2>
        </div>
        <div style="margin-top:30px;">
          <input
            type="text"
            v-model="value"
            style="outline:none;width:360px;height:30px;border:1px solid #ccc;"
          />
        </div>
        <div style="text-align:right;margin-top:30px;">
          <button @click="colse">取消</button>
          <button style="margin-left:10px;" @click="ok">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { message } from "ant-design-vue";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import { useRouter } from "vue-router";
import { useStorage } from "../hooks/useStorage";
interface Data {
  name: string;
  flag: boolean;
  value: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter();
    //引入useStorage()
    const { getMessage, setMessage, clearMessage } = useStorage();
    const data: Data = reactive<Data>({ name: "", flag: false, value: "" });
    //点击锁屏
    const lock = (): void => {
      data.flag = true;
    };
    //关闭遮罩层
    const colse = (): void => {
      data.flag = false;
    };
    //确定密码
    const ok = (): void => {
      if (data.value.indexOf(" ") == -1) {
        setMessage("pwd", data.value);
        data.flag = false;
        router.push("/lock");
      } else {
        data.flag = false;
        message.error("密码不能有空格");
      }
    };

    return {
      ...toRefs(data),
      lock,
      colse,
      ok
    };
  }
});
</script>

<style scoped lang='scss'>
.preview {
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
}
.box {
  background: #fff;
  position: fixed;
  left: 50%;
  bottom: 50%;
  margin-left: -200px;
  margin-bottom: -125px;
  border-radius: 15px;
}
</style>