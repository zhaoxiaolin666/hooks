import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext,
  createWebHashHistory,
} from "vue-router";
import Layout from "../views/layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "/Commonly",
        name: "Commonly",
        component: () => import("../views/Commonly.vue"),
        meta: {
          title: "常用hooks",
        },
      },
      {
        path: "/Picturepreview",
        name: "Picturepreview",
        component: () => import("../views/Picturepreview.vue"),
        meta: {
          title: "图片预览",
        },
      },
      {
        path: "/trend",
        name: "trend",
        component: () => import("../views/trend.vue"),
        meta: {
          title: "趋势",
        },
      },
      {
        path: "/bottomtoolbars",
        name: "bottomtoolbars",
        component: () => import("../views/bottomtoolbars.vue"),
        meta: {
          title: "底部工具栏",
        },
      },
      {
        path: "/Notificationicon",
        name: "Notificationicon",
        component: () => import("../views/Notificationicon.vue"),
        meta: {
          title: "通知图标",
        },
      },
      {
        path: "/Embeddedwebpage",
        name: "Embeddedwebpage",
        component: () => import("../views/Embeddedwebpage.vue"),
        meta: {
          title: "内嵌网页",
        },
      },
      {
        path: "/Captchabutton",
        name: "Captchabutton",
        component: () => import("../views/Captchabutton.vue"),
        meta: {
          title: "验证码按钮",
        },
      },
      {
        path: "/Progressbarexpansion",
        name: "Progressbarexpansion",
        component: () => import("../views/Progressbarexpansion.vue"),
        meta: {
          title: "进度条拓展",
        },
      },
      {
        path: "/GenerateQRcode",
        name: "GenerateQRcode",
        component: () => import("../views/GenerateQRcode.vue"),
        meta: {
          title: "生成二维码",
        },
      },
      {
        path: "/Copytext",
        name: "Copytext",
        component: () => import("../views/Copytext.vue"),
        meta: {
          title: "复制文本",
        },
      },
      {
        path: "/Generatewatermark",
        name: "Generatewatermark",
        component: () => import("../views/Generatewatermark.vue"),
        meta: {
          title: "生成水印",
        },
      },
      {
        path: "/Editabletext",
        name: "Editabletext",
        component: () => import("../views/Editabletext.vue"),
        meta: {
          title: "可编辑文字",
        },
      },
      {
        path: "/Lockscreen",
        name: "Lockscreen",
        component: () => import("../views/Lockscreen.vue"),
        meta: {
          title: "锁屏",
        },
      },
    ],
  },
  {
    path: "/lock",
    name: "lock",
    component: () => import("../views/lock.vue"),
    meta: {
      title: "锁屏显示",
    },
  },
];

//决定路由模式
const isPro: boolean = process.env.NODE_ENV === "prodution";

const router = createRouter({
  //history是路由模式(线上线下)
  history: isPro
    ? createWebHashHistory(process.env.BASE_URL)
    : createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    console.log(from);
    document.title = to.meta.title;
    const password = localStorage.getItem("pwd");
    if (to.path === "/lock") {
      next();
    } else {
      password ? next("/lock") : next();
    }
  }
);

export default router;
