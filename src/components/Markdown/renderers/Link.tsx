import clsx from "clsx";
import Link from "next/link";

const MLink: React.FC<{
  href: string;
  children: React.ReactNode;
  title: string;
}> = (props) => (
  <a
    href={props.href}
    target="_blank"
    className={clsx(
      "relative",
      "after:absolute after:left-0 after:right-0 after:bottom-[-.05em] after:z-[-1] after:h-[.425rem] after:content-['']",
      "after:bg-blue-200 after:inline-block",
      "dark:after:bg-blue-800",
      "hover:after:bg-blue-500 hover:after:h-[.1em]",
      "after:transition-all after:duration-200 after:ease-out",
    )}
    title={props.title}
  >
    {props.children}
  </a>
);

export default MLink;
