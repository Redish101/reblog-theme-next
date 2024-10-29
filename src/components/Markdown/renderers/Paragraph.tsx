import clsx from "clsx";
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import React from "react";

// 这里使用了@innei(https://github.com/Innei/Shiro/blob/main/src/components/ui/markdown/renderers/paragraph.tsx)的实现
export const MParagraph: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = (props) => {
  const { children, ...other } = props;
  const { className, ...rest } = other;

  if (React.Children.count(children) === 1) {
    // isImage
    const child = React.Children.toArray(children)[0];
    if (isImage(child)) {
      return children;
    }
  }

  return (
    <p className={clsx("paragraph", className)} {...rest}>
      {children}
    </p>
  );
};

const isImage = (child: any) => {
  if (typeof child === "object" && (child as any)?.props?.src) {
    return true;
  }
  return false;
};
