/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const MImage: React.FC<{ src: string; alt?: string }> = (props) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const container = imgRef.current;

    const delegate = "[data-fancybox]";

    NativeFancybox.bind(container, delegate, { Carousel: { infinite: true } });

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [imgRef]);

  return (
    <figure className="my-8" ref={imgRef}>
      <a data-fancybox="gallery" href={props.src}>
        <img src={props.src} alt={props.alt || ""} className="rounded-md" />
      </a>
      {props.alt && (
        <figcaption className="mt-4 text-slate-600 text-sm text-center">
          {props.alt}
        </figcaption>
      )}
    </figure>
  );
};

export default MImage;
