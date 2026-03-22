"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils'; // Optional: utility for tailwind classes

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Reservations', href: '/explore' },
    { name: 'Menu', href: '/menu' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-8 md:px-12 py-6 flex justify-between items-center",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      {/* Brand Logo */}
      <Link 
        href="/" 
        className="text-[#C5A048] italic font-serif text-2xl font-semibold tracking-wide hover:opacity-80 transition-opacity"
      >
        Lumière Reserve
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-12">
        <ul className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={cn(
                  "transition-colors duration-300 hover:text-[#C5A048]",
                  pathname === link.href ? "text-[#C5A048]" : "text-white/70"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Profile / Account */}
        <Link href="/account" className="group">
          <User className="w-5 h-5 text-[#C5A048] group-hover:scale-110 transition-transform" />
        </Link>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center gap-6">
        <Link href="/account">
          <User className="w-5 h-5 text-[#C5A048]" />
        </Link>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-white/10 p-8 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-[#C5A048]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;