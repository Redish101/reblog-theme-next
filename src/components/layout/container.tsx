import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen max-w-[855px] mx-auto px-2 pt-32 break-words">
      {children}
    </main>
  );
}
