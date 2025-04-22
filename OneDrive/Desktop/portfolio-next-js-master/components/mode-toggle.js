"use client";

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="w-[1.4rem] h-[1.4rem] text-neutral-800  dark:text-neutral-200" />
      ) : (
        <MoonIcon className="w-[1.4rem] h-[1.4rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      )}
    </Button>
  );
}
