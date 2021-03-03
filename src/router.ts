import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const history = createWebHashHistory();
//动态加载md文件，这会导致一个问题，build后找不到md文件，解决这个问题就要先导入
//const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
import intro from "./markdown/intro.md"
import getStarted from "./markdown/get-started.md"
import install from "./markdown/install.md"
const md = string=> h(Markdown,{content:string,key:string})
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        // { path: "intro", component: md('intro') },
        // { path: "get-started", component: md('get-started') },
        // { path: "install", component: md('install') },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});