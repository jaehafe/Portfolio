import React, { ReactNode } from "react";

import { Navbar_Provider } from "@/context/Navbar_Context";
import Navbar from "@/components/Navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Navbar_Provider>
      <Navbar />
      <main className="overflow-hidden">{children}</main>
      <footer className="absolute bottom-0 left-0 flex justify-center w-full py-4 -z-10">
        webdeve1083@gmail.com
      </footer>
    </Navbar_Provider>
  );
}