"use client";

import { getConfig } from "@/core/config";
import { useEffect, useState } from "react";

export default function Comment() {
  const [loadingStatus, setLoadingStatus] = useState<"loading" | "error">(
    "loading",
  );
  const config = getConfig();

  useEffect(() => {
    if (config.twikoo) {
      import("twikoo")
        .then(({ default: init }) => {
          init({
            envId: config.twikoo?.envId!,
            el: "#tcomment",
          });
        })
        .catch((error) => {
          setLoadingStatus("error");
          console.error(`Failed to load twikoo: ${error}`);
        });
    }
  });

  if (config.twikoo) {
    return (
      <div id="tcomment">
        {loadingStatus === "loading" && <div>正在加载评论...</div>}
        {loadingStatus === "error" && <div>评论加载失败</div>}
      </div>
    );
  }
}
