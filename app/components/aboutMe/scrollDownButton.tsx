"use client";
import { ScrollDown } from "@/app/icons";
import classNames from "classnames";
import React from "react";

interface scrollDownButtonProps {
  className: string;
}

function ScrollDownButton({ className }: scrollDownButtonProps) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.pageYOffset + window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={handleScrollDown}
      className={classNames(
        "animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full",
        className,
      )}>
      <ScrollDown />
    </div>
  );
}

export default ScrollDownButton;
