"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#ai-tools", label: "AI Tools" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-background/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 font-mono text-sm font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primaryForeground">
            A
          </span>
          <span className="hidden sm:inline text-foreground">Abhijith</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-lg border border-border/70 bg-panel/60 p-1 text-xs font-medium text-muted-foreground terminal-edge">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 transition-colors hover:bg-primary/10 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        
        <div className="md:hidden flex items-center gap-2">
            <Link href="#contact" className="rounded-md border border-border bg-panel px-3 py-2 text-xs font-medium text-muted-foreground">
              Contact
            </Link>
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
