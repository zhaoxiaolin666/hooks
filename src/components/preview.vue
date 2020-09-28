<template>
  <div>
    <!-- 正常显示图片 -->
    <div style="display:flex;">
      <div v-for="(item, index) in name" :key="index">
        <img
          :src="item.pre"
          alt=""
          @click="clickImg(index)"
          style="width:200px;height:200px;"
        />
      </div>
    </div>
    <!-- 大遮罩层 -->
    <div class="preview" v-if="flag" @click="colse1"></div>
    <!-- 预览图片 -->
    <div v-if="flag">
      <div style="display:flex">
        <div class="image">
          <!-- 上一张 -->
          <div
            v-if="name.length > 1"
            style="font-size:60px;z-index:20;cursor:default;display:flex;align-items:center;color:#fff;"
            @click="Previous"
          >
            &lt;
          </div>
          <!-- 预览图片 -->
          <div :class="name.length > 1 ? 'margin1' : 'margin2'">
            <img
              :src="name[Indexes].pre"
              :style="{
                transform: 'scale(' + scale + ')' + 'rotate(' + rotate + 'deg)'
              }"
              style="width: 200px;height: 200px;transition:1s;"
              @click="colse2"
            />
          </div>
          <!-- 下一张 -->
          <div
            :class="name.length > 1 ? 'margin1' : 'margin2'"
            style="font-size:60px;z-index:20;cursor:default;display:flex;align-items:center;color:#fff;"
            @click="Next"
            v-if="name.length > 1"
          >
            &gt;
          </div>
        </div>
      </div>
      <!-- 操作 -->
      <div class="caozuo">
        <div>
          <a-tooltip>
            <template v-slot:title>
              放大
            </template>
            <img
              src="../assets/放大.png"
              alt=""
              @click="enlarge"
              class="enlarge"
            />
          </a-tooltip>
        </div>
        <div>
          <a-tooltip>
            <template v-slot:title>
              缩小
            </template>
            <img
              src="../assets/缩小.png"
              alt=""
              @click="narrow"
              class="narrow"
            />
          </a-tooltip>
        </div>
        <div>
          <a-tooltip>
            <template v-slot:title>
              右旋转
            </template>
            <img
              src="../assets/右旋转.png"
              alt=""
              @click="Rightrotation"
              class="Rightrotation"
            />
          </a-tooltip>
        </div>
        <div>
          <a-tooltip>
            <template v-slot:title>
              左旋转
            </template>
            <img
              src="../assets/左旋转.png"
              alt=""
              @click="Leftrotation"
              class="Leftrotation"
            />
          </a-tooltip>
        </div>
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
  names: string;
  Indexes: number;
  flag: boolean;
  scale: number;
  rotate: number;
}
export default defineComponent({
  name: "preview",
  props: {
    name: {
      type: Array,
      required: true
    },
    shut: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      names: "",
      flag: false,
      Indexes: -1,
      scale: 1,
      rotate: 0
    });
    //点击图片
    const clickImg = (index: number): void => {
      data.flag = true;
      data.Indexes = index;
    };
    //关闭图片
    const colse1 = (): void => {
      if (props.shut) data.flag = false;
    };
    //关闭图片及预览提示
    const colse2 = (): void => {
      data.flag = false;
      alert("您预览了此图片");
    };
    //放大
    const enlarge = (): void => {
      if (data.scale < 3) data.scale += 0.2;
    };
    //缩小
    const narrow = (): void => {
      if (data.scale > 0.3) data.scale -= 0.2;
    };
    //右旋转
    const Rightrotation = (): void => {
      data.rotate += 90;
    };
    //左旋转
    const Leftrotation = (): void => {
      data.rotate -= 90;
    };
    //上一张
    const Previous = (): void => {
      if (data.Indexes === 0) {
        data.Indexes = props.name.length - 1;
      } else {
        data.Indexes--;
      }
    };
    //下一张
    const Next = (): void => {
      if (data.Indexes === props.name.length - 1) {
        data.Indexes = 0;
      } else {
        data.Indexes++;
      }
    };
    onMounted(() => {
      //   console.log(props.name);
    });
    return {
      ...toRefs(data),
      clickImg,
      colse1,
      colse2,
      enlarge,
      narrow,
      Rightrotation,
      Leftrotation,
      Previous,
      Next
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
.image {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -350px;
  margin-top: -100px;
  width: 700px;
}
.caozuo {
  display: flex;
  background-color: rgba(58, 56, 56, 0.8);
  justify-content: space-around;
  width: 250px;
  padding: 5px 10px;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -125px;
  margin-top: 120px;
  z-index: 10;
}
.enlarge:hover {
  transform: scale(1.2);
}
.narrow:hover {
  transform: scale(1.2);
}
.Rightrotation:hover {
  transform: scale(1.2);
}
.Leftrotation:hover {
  transform: scale(1.2);
}
.margin1 {
  margin-left: 200px;
}
.margin2 {
  margin-left: 250px;
}
</style>