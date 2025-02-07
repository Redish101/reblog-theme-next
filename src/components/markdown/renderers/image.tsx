/* eslint-disable @next/next/no-img-element */
// import { useEffect, useRef } from "react";

// import { Fancybox as NativeFancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// FIXME: Error: Cannot access default.props on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.
const MImage: React.FC<{ src: string; alt?: string }> = (props) => {
  // const imgRef = useRef(null);

  // useEffect(() => {
  //   const container = imgRef.current;

  //   const delegate = "[data-fancybox]";

  //   NativeFancybox.bind(container, delegate, { Carousel: { infinite: true } });

  //   return () => {
  //     NativeFancybox.unbind(container);
  //     NativeFancybox.close();
  //   };
  // }, [imgRef]);

  return (
    <figure className="my-8">
      <img
        src={props.src}
        alt={props.alt || ""}
        className="rounded-md mx-auto"
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
