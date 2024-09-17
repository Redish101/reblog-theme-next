import Button from "@/components/Button";
import Fieldset from "@/components/Fieldset";
import Input from "@/components/Input";

export default function LoginPage() {
  return (
    <div className="min-h-screen max-w-[425px] mx-auto px-6 pt-32 break-words">
      <h2 className="text-4xl font-medium text-center">登录</h2>
      <div className="mt-14">
        <Fieldset>
          <Input name="username" placeholder="用户名" />
          <Input name="password" placeholder="密码" type="password" />
        </Fieldset>
      </div>
      <div className="mt-6">
        <Fieldset>
          <Button primary full>
            登录
          </Button>
          <Button full>占位符</Button>
        </Fieldset>
      </div>
    </div>
  );
}
