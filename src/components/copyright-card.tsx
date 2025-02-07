import clsx from "clsx";

const CopyrightCard: React.FC<{ title: string; url: string }> = (props) => (
  <div
    className={clsx(
      "max-w-none bg-slate-100 mx-auto rounded-lg border-slate-300 border p-4 my-6 flex gap-3 flex-col",
      "dark:bg-slate-800 dark:border-slate-700",
      "md:hover:shadow-lg md:hover:-translate-y-1 transition-all ease-out hover:shadow-xl hover:-translate-y-2",
      "active:shadow-none active:translate-y-0",
    )}
  >
    <div className="flex flex-col gap-1 z-20">
      <div className="text-xl font-medium">{props.title}</div>
      <div className="text-xs text-slate-600">{props.url}</div>
    </div>
    <div className="flex flex-col gap-1 text-sm">
      <div>
        本文采用 CC BY-NC-SA 4.0 - 非商业性使用 - 相同方式共享 4.0
        国际进行许可。
      </div>
      <div>
        商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，您可以自由地在任何媒体以任何形式复制和分发作品，也可以修改和创作，但是分发衍生作品时必须采用相同的许可协议。
      </div>
    </div>
  </div>
);

export default CopyrightCard;
