import clsx from "clsx";

const MLink: React.FC<{
  href: string;
  children: React.ReactNode;
  title: string;
}> = (props) => (
  <a
    href={props.href}
    target="_blank"
    className="link"
    title={props.title}
  >
    {props.children}
  </a>
);

export default MLink;
