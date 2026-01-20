"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
          >
            Foodie
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <Link href="/menu" className="hover:text-orange-500">
              Menu
            </Link>
            <Link href="/about" className="hover:text-orange-500">
              About
            </Link>
            <Link href="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="px-5 py-2 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white font-medium hover:opacity-90">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-6 font-medium">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/menu" onClick={() => setOpen(false)}>
              Menu
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <button className="mt-4 py-2 rounded-full bg-linear-to-r from-orange-500 to-red-600 text-white">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
