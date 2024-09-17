import { Button as HeadlessButton } from "@headlessui/react";
import clsx from "clsx";

export default function Button(props: {
  onClick?: () => void;
  children: React.ReactNode;
  primary?: boolean;
  full?: boolean;
}) {
  return (
    <HeadlessButton
      onClick={props.onClick}
      className={clsx(
        "outline outline-1 rounded px-4 py-2 text-sm font-medium transition",
        props.primary &&
          "bg-foreground text-background data-[hover]:bg-[#0a1d24e6] dark:data-[hover]:bg-[#b6b9bf]",
        !props.primary &&
          "bg-background data-[hover]:bg-[#e4e8e9] outline-card-background dark:data-[hover]:bg-[#1f2631]",
        props.full && "w-full",
      )}
    >
      {props.children}
    </HeadlessButton>
  );
}
