import { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}
