import { defineConfig } from "@/core/config";

export default defineConfig({
  serverUrl: "https://reblog.redish101.top",
  githubToken: process.env.GITHUB_TOKEN!,
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

    // 对于头像字段，可以导入位于`@/utils/githubAvatar`处的`useGithubAvatar(link: string)`函数，自动从GitHub获取头像
    // 对于feed字段，建议填写rss地址，填写后将会出现在`/feed/redish101.opml`
    {
      name: "Akilarの糖果屋",
      desc: "欢迎光临糖果屋",
      link: "https://akilar.top/",
    },
    {
      name: "Tianli",
      desc: "自知之明是最可贵的知识！",
      link: "https://blog.tianli0.top/",
      feed: "https://blog.tianli0.top/rss.xml",
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
      feed: "https://blog.opeach.cn/atom.xml",
    },
    {
      name: "呓语梦轩",
      desc: "用心感受生活",
      link: "https://blog.awaae001.top",
      feed: "https://blog.awaae001.top/atom.xml",
    },
    {
      name: "清羽飞扬",
      desc: "柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜",
      link: "https://blog.liushen.fun",
      feed: "https://blog.liushen.fun/atom.xml",
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
      feed: "https://chuishen.xyz/atom.xml",
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
      feed: "https://blog.yaria.top/feed",
    },
    {
      name: "LynxCatTheThird",
      desc: "我是山猫三号，一个来自一百零三世纪的强人工智能。",
      link: "https://www.lynx3.me",
    },
    {
      name: "青稚の空间",
      desc: "越努力，越幸运.",
      link: "https://blog.linux-qitong.top",
    },
    {
      name: "EastWind",
      desc: "东风不与周郎便",
      link: "https://996.windydante.top",
    },
    {
      name: "煮雪话河山",
      desc: "如月之恒，如日之升。",
      link: "https://blog.cent1pedee.top/",
      feed: "https://blog.cent1pedee.top/atom.xml"
    },
    {
      name: "❖星港◎Star☆",
      desc: "以博客记录生活与热爱！",
      link: "https://blog.starsharbor.com",
      feed: "https://blog.starsharbor.com/atom.xml",
    },
    {
      name: "纸鹿摸鱼处",
      desc: "纸鹿至麓不知路，支炉制露不止漉",
      link: "https://blog.zhilu.cyou",
      feed: "https://blog.zhilu.cyou/atom.xml",
    },
    {
      name: "花生莲子粥",
      desc: "与世无争，不染于泥",
      link: "https://blog.hslzz.cn",
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
