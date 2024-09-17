import { Input as HInput } from "@headlessui/react";
import clsx from "clsx";

export default function Input(props: {
  name?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <HInput
      className={clsx(
        "bg-card-background w-full p-2 rounded outline-1 outline-card-background transition",
        "data-[focus]:bg-nav-background",
      )}
      {...props}
    />
  );
}
