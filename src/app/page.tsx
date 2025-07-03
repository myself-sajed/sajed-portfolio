"use client";

import { useEffect, useState } from "react";
import Portfolio from "./portfolio";
import { TerminalLoading } from "./terminal-loading";

export default function Page() {
  const [showLoading, setShowLoading] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");

    if (!hasSeenLoading) {
      setShowLoading(true);

      const timeout = setTimeout(() => {
        setShowLoading(false);
        setShowPortfolio(true);
        sessionStorage.setItem("hasSeenLoading", "true");
      }, 5000); // total duration of animations

      return () => clearTimeout(timeout);
    } else {
      // skip animation
      setShowPortfolio(true);
    }
  }, []);

  return (
    <>
      {showLoading && <TerminalLoading />}
      {showPortfolio && <Portfolio />}
    </>
  );
}
