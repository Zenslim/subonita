"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/site-data";

type MobileSubmenuKey = "about" | "projects";

const mobileSubmenus: Record<MobileSubmenuKey, { label: string; href: string }[]> = {
  about: [
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/board" },
  ],
  projects: [
    { label: "Project", href: "/project" },
    { label: "Gallery", href: "/gallery" },
  ],
};

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<MobileSubmenuKey | null>(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (key: MobileSubmenuKey) => {
    setOpenSubmenu((prev) => (prev === key ? null : key));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-sand/95 backdrop-blur">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-4" onClick={closeMobileMenu}>
            <Image src="/subonita-logo.png" alt="Subonita Foundation logo" width={56} height={56} className="rounded-full border border-black/10 bg-white p-1" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brandRed">Subonita Foundation</p>
              <p className="text-xs text-black/70">Trauma Hub Project in Nepal</p>
            </div>
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-black/15 px-3 py-2 text-black/80 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="text-sm font-semibold">Menu</span>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-black/75 transition hover:text-brandRed">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {isMobileMenuOpen && (
          <nav className="mt-4 rounded-md border border-black/10 bg-sand p-3 shadow-md md:hidden">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isAbout = item.href === "/about";
                const isProjects = item.href === "/project";

                if (isAbout || isProjects) {
                  const key: MobileSubmenuKey = isAbout ? "about" : "projects";
                  const expanded = openSubmenu === key;

                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium text-black/80 hover:bg-black/5"
                        onClick={() => toggleSubmenu(key)}
                        aria-expanded={expanded}
                      >
                        <span>{isAbout ? "About Us" : "Projects"}</span>
                        <span aria-hidden="true">{expanded ? "−" : "+"}</span>
                      </button>

                      {expanded && (
                        <ul className="mt-1 space-y-1 pl-4">
                          {mobileSubmenus[key].map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                href={subItem.href}
                                className="block rounded-md px-2 py-2 text-sm text-black/80 hover:bg-black/5"
                                onClick={closeMobileMenu}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-2 py-2 text-sm font-medium text-black/80 hover:bg-black/5"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
