import React from "react";

export type ErrorProps = {
  statusCode: number;
  title?: string;
  withDarkMode?: boolean;
};

const styles: Record<string, React.CSSProperties> = {
  error: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
  },
  desc: {
    lineHeight: "48px",
  },
  h1: {
    display: "inline-block",
    margin: "0 20px 0 0",
    paddingRight: 23,
    fontSize: 24,
    fontWeight: 500,
    verticalAlign: "top",
  },
  h2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "28px",
  },
  wrap: {
    display: "inline-block",
  },
};

/**
 * `Error` component used for handling errors.
 */
export default function NotFound() {
  const title = "未知的页面";

  return (
    <div style={styles.error}>
      <div style={styles.desc}>
        <style
          dangerouslySetInnerHTML={{
            /* CSS minified from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${
                  withDarkMode
                    ? `@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }`
                    : ''
                }
               */
            __html: `.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}${"@media (prefers-color-scheme:dark){.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}`,
          }}
        />

        <h1 className="next-error-h1" style={styles.h1}>
          404
        </h1>
        <div style={styles.wrap}>
          <h2 style={styles.h2}>{title}</h2>
        </div>
      </div>
    </div>
  );
}
