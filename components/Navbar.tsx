"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-auto">
      <nav className="bg-background border border-border rounded-full px-6 py-1 shadow-lg flex items-center w-full justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="-ml-2 mr-2 h-14 w-20 relative -mb-1 drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]">
            <Image
              src="/logo.png"
              alt="SAGA Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        {/* Navigation links - always visible */}
        <div className="flex gap-4 sm:gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`transition-colors text-md hover:text-primary sm:text-base ${
                pathname === item.path
                  ? "text-primary font-medium"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
