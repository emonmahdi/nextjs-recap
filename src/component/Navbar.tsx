"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Dashboard", href: "/dashboard" },
  { title: "About", href: "/about" },
  { title: "Gallery", href: "/gallery" },
  { title: "Blog", href: "/blogs" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-purple-800 px-12 text-white py-6 flex justify-between items-center">
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
                  className={`px-3 text-white ${
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
