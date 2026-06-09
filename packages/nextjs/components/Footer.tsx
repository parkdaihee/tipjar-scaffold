import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <footer className="py-6 px-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="text-sm opacity-70">
          Built with <HeartIcon className="inline-block h-4 w-4" /> TipJar
        </div>
        <SwitchTheme />
      </div>
    </footer>
  );
};
