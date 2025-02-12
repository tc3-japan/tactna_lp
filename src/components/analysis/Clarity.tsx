"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

export default function ClarityInit() {
  useEffect(() => {
    const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (CLARITY_ID && typeof window !== "undefined") {
      Clarity.init(CLARITY_ID);
    }
  }, []);
  return <></>;
}
