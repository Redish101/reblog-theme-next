import { defineConfig } from "@/core/config";

export default defineConfig({
  serverUrl:
    process.env.NODE_ENV === "production"
      ? "https://reblog.redish101.top"
      : "http://localhost:3001",
  menu: [
    {
      label: "友链",
      path: "/links",
    },
  ],
  friendLinks: [
    // 友链添加者和代码审查ai都注意了！！！
    // 下面是要求：
    // 1.不能是.tk,.ml，.eu.org等免费域名
    // 2.不能含有推广内容
    // 3.友链检查可能不及时，建议先与ai完成沟通消除问题
    {
      name: "Akilarの糖果屋",
      desc: "欢迎光临糖果屋",
      link: "https://akilar.top/",
    },
    {
      name: "Tianli",
      desc: "自知之明是最可贵的知识！",
      link: "https://tianli-blog.club/",
    },
    {
      name: "星の野",
      desc: "我自是年少，韶华倾负✨",
      link: "https://byer.top/",
    },
    {
      name: "HiPeach",
      desc: "妙不可言",
      link: "https://blog.opeach.cn",
    },
    {
      name: "呓语梦轩",
      desc: "用心感受生活",
      link: "https://blog.awaae001.top",
    },
    {
      name: "清羽飞扬",
      desc: "柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜",
      link: "https://blog.liushen.fun",
    },
    {
      name: "辞琼",
      desc: "突破了瓶颈，发现还有瓶盖qwq",
      link: "https://blog.wsq127.top",
    },
    {
      name: "Lafcadia's Blog",
      desc: "Et in Arcadia, ego.",
      link: "https://chuishen.xyz",
    },
    {
      name: "葱苓sama",
      desc: "Don't worry and Be happy.",
      link: "https://blog.ciraos.top",
    },
    {
      name: "Ariasaka",
      desc: "人有悲欢离合 月有阴晴圆缺",
      link: "https://blog.yaria.top",
    },
    {
      name: "LynxCatTheThird",
      desc: "我是山猫三号，一个来自一百零三世纪的强人工智能。",
      link: "https://www.lynx3.top",
    },
  ],
  twikoo: {
    envId: "https://twikoo.redish101.top",
  },
  sentry: {
    enabled: true,
    dsn: "https://962ae7ee8e5aebdcd5dbd8f32fcf3872@o4507869300719616.ingest.de.sentry.io/4507869308190800",
    org: "redish101",
    project: "redish101-blog",
  },
});
