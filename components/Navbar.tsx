"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Team", path: "/team" },
  ];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-auto">
      <nav className="bg-background border border-border rounded-full px-6 py-3 shadow-lg flex items-center w-full justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="mr-6 h-8 w-16 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-semibold">SAGA</span>
          </div>
        </Link>

        {/* Navigation links - always visible */}
        <div className="flex gap-4 sm:gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`transition-colors hover:text-primary sm:text-base ${
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
