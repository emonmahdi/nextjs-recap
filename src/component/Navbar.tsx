"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blogs" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex justify-between max-w-7xl mx-auto border-b py-3 bg-amber-200">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div>
        <ul className="flex px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 ${
                    isActive ? "font-semibold text-orange-500" : "text-black"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
