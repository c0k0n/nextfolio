"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeSwitch } from "./theme-switch";

const navItems = {
  "/": { name: "Overview" },
  "/resume": { name: "Resume" },
  "/portfolio": { name: "Portfolio" },
  "/others": { name: "Others" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
  "/blog": { name: "Blog" },

};

function ThemeLogo() {
  const { resolvedTheme } = useTheme();

  return (
      <Image
          src={resolvedTheme === 'dark' ? "/logo-light.svg" : "/logo-dark.svg"}
          alt="Dossier"
          width={69}
          height={69}
          className="rounded-lg transition-all duration-200 ease-in-out"
      />
  );
}



export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <ThemeLogo />
            <span className="sr-only">Dossier</span>
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
