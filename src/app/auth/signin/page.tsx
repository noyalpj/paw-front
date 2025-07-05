"use client";

import { useState } from "react";
import Input from "../_components/Input";
import Header from "@/components/general/Header";
import Image from "next/image";
import Link from "next/link";
// import { FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <Header />

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Image
              className="mx-auto mb-4"
              src="/icons/heart-logo.svg"
              alt="Logo"
              width={55}
              height={60}
            />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to your PawConnect account</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
              Sign In
            </h2>

            <form>
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="your.email@example.com"
              />
              <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className="mr-2"
                  />
                  Remember me
                </label>
                <a href="#" className="text-sm text-orange-500 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md transition"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-700">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-orange-500 font-medium hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
