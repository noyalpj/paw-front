import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Branding */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/icons/heart-logo.svg"
                alt="Logo"
                width={30}
                height={30}
              />
              <span className="text-2xl font-bold text-gray-900 hover:text-orange-600 transition-colors">
                PawConnect
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/browse"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Browse Pets
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/auth/signin">
              <button className="border border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-black px-6 py-1.5 rounded-md">
                Sign in
              </button>
            </Link>
            {/* <Link href="/join-as-shelter">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                Join as Shelter
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}
