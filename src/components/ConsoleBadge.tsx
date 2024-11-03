import { useEffect } from "react";

const ConsoleBadge: React.FC = () => {
  useEffect(() => {
    console.log(
      "%c%creblog%cby Redish101",
      "display: flex;",
      "background: #006bb8; padding: 5px; border-radius: 3px 0 0 3px; color: #fff;",
      "background: #006bb818; padding: 5px; border-radius: 0 3px 3px 0; color: #006bb8;"
    );
  });
  return <></>;
};

export default ConsoleBadge;
