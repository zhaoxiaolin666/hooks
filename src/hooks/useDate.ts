import { onMounted, onUnmounted, ref } from "vue";
import dayjs from "dayjs";
export const useDate = () => {
  const date = ref(dayjs().format("YYYY-MM-DD HH:mm:ss"));
  let timer: any = null;
  onMounted(() => {
    timer = setInterval(() => {
      date.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  });
  onUnmounted(() => {
    clearInterval(timer);
  });
  return { date };
};
