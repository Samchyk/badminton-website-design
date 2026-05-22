"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Kezdőlap" },
    { href: "/play-types", label: "Játéktípusok" },
    { href: "/history", label: "Történet" },
    { href: "/rules", label: "Szabályok" },
    { href: "/equipment", label: "Felszerelés" },
    { href: "/facts", label: "Érdekességek" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl group"
        >
          <div className="w-8 h-8 rounded-lg bg-primary group-hover:shadow-lg transition-all duration-300"></div>
          <span className="gradient-text">Hungarytollaslabda </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
