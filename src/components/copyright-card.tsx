import { Card, CardHeader, CardTitle } from "./ui/card";

const CopyrightCard: React.FC<{ title: string; url: string }> = (props) => (
  <Card>
    <CardHeader>
      <CardTitle>
        {props.title}
        {props.url && <p className="mt-2 text-slate-600 font-normal">{props.url}</p>}
        <div className="mt-4 flex flex-col text-sm text-muted-foreground font-normal">
          <p>
            本文采用 CC BY-NC-SA 4.0 - 非商业性使用 - 相同方式共享 4.0 进行许可。
          </p>
          <p>
            商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，您可以自由地在任何媒体以任何形式复制和分发作品，也可以修改和创作，但是分发衍生作品时必须采用相同的许可协议。
          </p>
        </div>
      </CardTitle>
    </CardHeader>
  </Card>
);

export default CopyrightCard;
