import React from "react";

import DesignNavbar from "@/components/design-navbar";

interface Props {
  children: React.ReactNode;
}

export default function DesignLayout({ children }: Props) {
  return (
    <>
      {children}
      <DesignNavbar />
    </>
  );
}
