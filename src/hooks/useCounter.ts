import { ref } from "vue";
import { message } from "ant-design-vue";
export const useCounter = ({
  current,
  min,
  max,
  delay,
}: {
  current?: number;
  min?: number;
  max?: number;
  delay?: number;
}) => {
  if (current! < min!) {
    current = min;
    message.error("默认值小于最小值");
  }
  if (current! > max!) {
    current = max;
    message.error("默认值大于最大值");
  }
  const count = ref<number>(current!);
  //增加
  const inc = () => {
    if (max) {
      if (count.value < max!) count.value++;
    } else {
      count.value++;
    }
  };
  //减少
  const dec = () => {
    if (min) {
      if (count.value > min!) count.value--;
    } else {
      count.value--;
    }
  };
  //设置
  const set = (num: number) => {
    count.value = num!;
  };
  //重置
  const reset = () => {
    count.value = current!;
  };
  //延迟加
  const delayInc = () => {
    setTimeout(() => {
      count.value++;
    }, delay);
  };
  //延迟减
  const delayDec = () => {
    setTimeout(() => {
      count.value--;
    }, delay);
  };
  //按数量加
  const setInc = (step: number) => {
    if (count.value < max!) count.value += step;
  };
  //按数量减
  const setDec = (step: number) => {
    if (count.value < min!) count.value -= step;
  };
  return { count, inc, dec, set, reset, delayInc, delayDec, setInc, setDec };
};
