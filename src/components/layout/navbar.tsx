"use client";

import Link from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Site } from "@reblog/themekit";
import { UserConfig } from "@/core/config";

interface NavBarProps {
  site: Site;
  config: UserConfig;
}

const NavBar: React.FC<NavBarProps> = ({ site, config }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "backdrop-blur-sm h-12 flex justify-between items-center transition-all ease-out",
        "px-2 fixed w-full z-1000 top-0 sm:px-16",
        scrolled && "shadow-sm bg-nav-background",
      )}
    >
      <span className="font-medium">
        <Link href="/">{site?.name}</Link>
      </span>
      <div className="text-sm text-gray-800 flex space-x-4 dark:text-gray-300">
        {config.menu?.map((item) => (
          <Link key={item.label} href={item.path}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
