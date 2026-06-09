"use client";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SwitchTheme } from "~~/components/SwitchTheme";

/**
 * Site header
 */
export const Header = () => {
  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <Link href="/" passHref className="flex items-center gap-2 ml-4 mr-6 shrink-0">
          <span className="font-bold leading-tight text-lg">TipJar</span>
        </Link>
      </div>
      <div className="navbar-end grow mr-4">
        <SwitchTheme className="mr-2" />
        <ConnectButton />
      </div>
    </div>
  );
};
