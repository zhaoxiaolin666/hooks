<template>
  <div>
    <button @click="code" :disabled="disabledflag" ref="setRef">
      {{ cont }}
    </button>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
  getCurrentInstance,
  ref,
  Ref
} from "vue";
interface Data {
  cont: string;
  disabledflag: boolean;
}
export default defineComponent({
  name: "VerificationCode",
  props: {
    times: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    Processing: {
      type: String,
      required: true
    },
    finish: {
      type: String,
      required: true
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      cont: "",
      disabledflag: false
    });
    let myRef = ref<HTMLInputElement | null>(null);
    const setRef = (el: any) => {
      console.log(111);
      myRef = el;
      console.log(myRef);
    };
    const Instance = getCurrentInstance();
    const code = (): void => {
      let timer: any = null;
      let outTime = props.times;
      timer = setInterval(() => {
        data.disabledflag = true;
        outTime--;
        data.cont = `${outTime}${props.Processing}`;
        if (outTime === 0) {
          data.disabledflag = false;
          data.cont = props.finish;
          clearInterval(timer);
        }
      }, 1000);
    };
    onMounted(() => {
      data.cont = props.name;
    });
    return {
      ...toRefs(data),
      code,
      setRef
    };
  }
});
</script>

<style scoped lang='scss'>
</style>