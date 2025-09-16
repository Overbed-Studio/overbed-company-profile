"use client";

import { useEffect } from "react";

export default function AddBootstrap() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import("bootstrap/dist/js/bootstrap.bundle.min.js" as any);
  }, []);
  return <></>;
}
