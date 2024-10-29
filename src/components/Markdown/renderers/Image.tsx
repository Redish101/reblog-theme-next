/* eslint-disable @next/next/no-img-element */
"use client";
import mediumZoom from "medium-zoom";
import { useEffect, useRef } from "react";

const MImage: React.FC<{ src: string; alt?: string }> = (props) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      mediumZoom(imgRef.current, {
        background: "var(--background)",
      });
    }
  }, [imgRef]);

  return (
    <figure className="my-8">
      <img
        ref={imgRef}
        src={props.src}
        alt={props.alt || ""}
        className="rounded-md"
      />
      {props.alt && (
        <figcaption className="mt-4 text-slate-600 text-sm text-center">
          {props.alt}
        </figcaption>
      )}
    </figure>
  );
};

export default MImage;
